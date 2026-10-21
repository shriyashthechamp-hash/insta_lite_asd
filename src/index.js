const express =  require('express');
const app = express();
require("dotenv").config();
app.get('/health' , (req, res) =>{
    res.status(200).json({status: 'ok'})
})
app.listen(3000 , () =>{
    console.log('Server is running on port 3000')
})


const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connection successful");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
  }
}

testConnection();