import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const configService = new ConfigService();

export const DatabaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_Server'),
  port: configService.get<number>('DB_Port'),
  username: configService.get<string>('DB_User'),
  password: configService.get<string>('DB_Password'),
  database: configService.get<string>('DB_Name'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DatabaseConfig);
