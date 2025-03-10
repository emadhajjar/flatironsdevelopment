import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

import { ProductQueryDto } from './product-query.dto';
import { ProductsService } from './products.service';
import { UploadFileDto } from './upload-file.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() query: ProductQueryDto) {
    return this.productsService.getProducts(query);
  }

  @ApiBody({
    type: UploadFileDto,
  })
  @ApiConsumes('multipart/form-data')
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.productsService.processCsv(file);
  }
}
