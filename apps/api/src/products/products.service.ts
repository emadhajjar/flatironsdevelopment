import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import csvParser from 'csv-parser';
import dayjs from 'dayjs';
import { Readable } from 'node:stream';
import axios from 'redaxios';

import { PrismaService } from '../prisma/prisma.service'; // Assuming you have a PrismaService
import { CurrencyRates } from './api-excahnge-rate.interface';
import { CreateProductDto } from './create-product.dto';
import { ProductQueryDto } from './product-query.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts({ expiration, name, price, sortBy, sortOrder }: ProductQueryDto) {
    const where: Prisma.ProductWhereInput = {};
    const orderBy: Prisma.ProductOrderByWithRelationInput = {};

    if (name) {
      where.name = { contains: name, mode: 'insensitive' };
    }

    if (price) {
      where.price = price;
    }

    if (expiration) {
      where.expiration = expiration;
    }

    if (sortBy) {
      orderBy[sortBy] =
        sortOrder === Prisma.SortOrder.desc ? Prisma.SortOrder.desc : Prisma.SortOrder.asc;
    }

    return this.prisma.product.findMany({
      include: {
        exchangeRates: true,
      },
      orderBy,
      where,
    });
  }

  async processCsv(file: Express.Multer.File) {
    const results: CreateProductDto[] = [];

    return new Promise((resolve, reject) => {
      Readable.from(file.buffer)
        .pipe(csvParser())
        .on('data', (data: any) => {
          results.push({
            expiration: dayjs(data.expiration).toDate(),
            name: data.name,
            price: Number.parseFloat(data.price),
          });
        })
        .on('end', async () => {
          try {
            const products = await this.processProducts(results);
            resolve(products);
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  private calculateExchangeRates(price: number, currencyRates: Record<string, number>) {
    const currencies = ['usd', 'eur', 'gbp', 'jpy', 'cad'];
    const exchangeRates: Prisma.ExchangeRateCreateWithoutProductInput[] = [];

    for (const currency of currencies) {
      exchangeRates.push({
        currency,
        rate: price * currencyRates[currency],
      });
    }

    return exchangeRates;
  }

  private createProductWithRates(
    product: CreateProductDto,
    exchangeRates: Prisma.ExchangeRateCreateWithoutProductInput[],
  ) {
    return this.prisma.product.create({
      data: {
        exchangeRates: {
          create: exchangeRates,
        },
        expiration: product.expiration,
        name: product.name,
        price: product.price,
      },
    });
  }

  private async fetchCurrencyRates() {
    const baseUrl =
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json';

    try {
      const response = await axios.get<CurrencyRates>(baseUrl);
      return response.data.brl;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  }

  private async processProducts(products: CreateProductDto[]) {
    const currencyRates = await this.fetchCurrencyRates();

    try {
      return this.prisma.$transaction(
        products.map((product) => {
          const exchangeRates = this.calculateExchangeRates(product.price, currencyRates);
          return this.createProductWithRates(product, exchangeRates);
        }),
      );
    } catch (error) {
      console.error('Error processing products', error);
      throw error;
    }
  }
}
