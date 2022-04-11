import path from 'path';
import { DataSource } from 'typeorm';
import { Post } from './entities/Post';
import { Updoot } from './entities/Updoot';
import { User } from './entities/User';

export const dataSource = new DataSource({
  type: 'postgres',
  database: 'reddit-clone2',
  port: 5434,
  username: 'postgres',
  password: '12qwaszx',
  logging: true,
  synchronize: true,
  migrations: [path.join(__dirname, './migrations/*')],
  entities: [Post, User, Updoot],
});
