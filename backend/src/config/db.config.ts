import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: "5252",
  database: "postgres",
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
