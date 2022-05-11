import 'dotenv-safe/config';
import path from 'path';
import { DataSource } from 'typeorm';
import { Post } from './entities/Post';
import { Updoot } from './entities/Updoot';
import { User } from './entities/User';

export const dataSource = new DataSource({
  type: 'postgres',
  port: 5434,
  url: process.env.DATABASE_URL,
  logging: true,
  // synchronize: true,
  migrations: [path.join(__dirname, './migrations/*')],
  entities: [Post, User, Updoot],
});
