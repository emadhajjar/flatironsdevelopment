import { ApiProperty } from '@nestjs/swagger';

import { ExchangeRate } from './exchange_rate';

export class Product {
  @ApiProperty({ isArray: true, type: () => ExchangeRate })
  exchangeRates: ExchangeRate[];

  @ApiProperty({ type: Date })
  expiration: Date;

  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  price: number;
}
