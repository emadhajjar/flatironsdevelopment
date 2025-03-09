import { ApiProperty } from '@nestjs/swagger';

import { Product } from './product';

export class ExchangeRate {
  @ApiProperty({ type: String })
  currency: string;

  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: () => Product })
  product: Product;

  @ApiProperty({ type: Number })
  productId: number;

  @ApiProperty({ type: Number })
  rate: number;
}
