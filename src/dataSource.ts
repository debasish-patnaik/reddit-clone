import { DataSource } from 'typeorm';
import { Post } from './entities/Post';
import { User } from './entities/User';

export const dataSource = new DataSource({
  type: 'postgres',
  database: 'reddit-clone2',
  port: 5434,
  username: 'postgres',
  password: '12qwaszx',
  logging: true,
  synchronize: true,
  entities: [Post, User],
});
