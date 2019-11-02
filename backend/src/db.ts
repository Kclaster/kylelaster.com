import { Prisma as PrismaBinding } from 'prisma-binding'
import { typeDefs } from "./generated/prisma-client/prisma-schema";
import { makePrismaClientClass } from "prisma-client-lib";
import { ClientConstructor, models } from './generated/prisma-client';
import {config} from 'dotenv'
config();
/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<PrismaBinding>>({
  typeDefs,
  models,
  endpoint: process.env.PRISMA_ENDPOINT
});
export const prisma = new Prisma();