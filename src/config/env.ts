import dotenv from "dotenv";
import path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
})

const ENV = {
    PORT: process.env.PORT || 7000,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    JWT_SECRET: process.env.JWT_SECRET || ""
}

export default ENV;