-- CreateTable
CREATE TABLE "Product" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "price" DOUBLE PRECISION NOT NULL,
  "expiration" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExchangeRate" (
  "id" SERIAL NOT NULL,
  "currency" TEXT NOT NULL,
  "rate" DOUBLE PRECISION NOT NULL,
  "productId" INTEGER NOT NULL,
  CONSTRAINT "ExchangeRate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExchangeRate"
ADD CONSTRAINT "ExchangeRate_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
