
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "shriyu",
      email: "shriyu@example.com",
      fullname: "Shriyash Deshmukh",
      bio: "Learning Prisma",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
