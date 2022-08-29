import { PrismaClient } from "@prisma/client";

const config = { log: ['query', 'info', 'warn', 'error'], }
const prisma = new PrismaClient();

export { prisma };
