import { config as dotenvConfig } from "dotenv";
import { Dialect } from "sequelize/types/sequelize";

dotenvConfig();

export const config = {
  server: {
    port: Number(process.env.HOST_PORT) || 3000,
    host: process.env.HOST || "localhost",
  },
  db: {
    dialect: (process.env.DB_DIALECT as Dialect) || "postgres",
    database: process.env.DB_NAME || "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
  },
};
