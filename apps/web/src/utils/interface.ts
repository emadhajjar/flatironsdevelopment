export interface ExchangeRate {
  currency: string;
  id: number;
  productId: number;
  rate: number;
}

export interface Product {
  exchangeRates?: ExchangeRate[];
  expiration: Date;
  id: number;
  name: string;
  price: number;
}
