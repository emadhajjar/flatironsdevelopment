import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsDate()
  expiration: Date;

  @IsString()
  name: string;

  @IsNumber()
  price: number;
}
