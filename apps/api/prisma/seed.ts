import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

const environmentFilePath = `../../../../conf/${process.env.NODE_ENV ?? 'dev'}.env`;

dotenv.config({ path: environmentFilePath });

const prisma = new PrismaClient();

try {
  console.log(`Start seeding ...`);
} catch (error) {
  console.error(error);
}

await prisma.$disconnect();
