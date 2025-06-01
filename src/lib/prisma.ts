import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// Buat tipe khusus dari hasil extend
type ExtendedPrismaClient = ReturnType<typeof setupPrisma>

const globalForPrisma = globalThis as unknown as {
  prisma: ExtendedPrismaClient | undefined
}

function setupPrisma() {
  return new PrismaClient().$extends(withAccelerate())
}

const prisma = globalForPrisma.prisma ?? setupPrisma()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
