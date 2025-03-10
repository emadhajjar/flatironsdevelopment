import { ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductQueryDto {
  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  expiration?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({
    enum: Prisma.ProductScalarFieldEnum,
  })
  @IsOptional()
  @IsString()
  sortBy?: Prisma.ProductScalarFieldEnum;

  @ApiPropertyOptional({
    enum: Prisma.SortOrder,
  })
  @IsOptional()
  @IsString()
  sortOrder?: Prisma.SortOrder;
}
