import { PrismaClient } from '@prisma/client'
import { prisma } from './db'

export type APIContext = {
  prisma: PrismaClient
}

export const context: APIContext = {
  prisma,
}
