import { ExchangeRate as _ExchangeRate } from './exchange_rate';
import { Product as _Product } from './product';

export namespace PrismaModel {
  export class ExchangeRate extends _ExchangeRate {}
  export class Product extends _Product {}

  export const extraModels = [Product, ExchangeRate];
}
