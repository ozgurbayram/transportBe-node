import { DataSource } from "typeorm";
import { User } from "../modules/user/models/User";
import { Advert } from "../modules/advert/modes/Advert";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Advert],
  migrations: [],
  subscribers: [],
});
