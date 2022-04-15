import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.note.create({
    data: {
      title: 'Test note 1',
      body: `
# Note header
- note body line 1
  - note body line 2
- [ ] checkbox
      `.trim(),
    },
  })

  console.log(`> Seeded successfully. 🌱`)
}

seed()
  .catch((err) => {
    console.error(`> Error! on seeding:`, err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
