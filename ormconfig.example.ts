import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'realworld',
    database: 'realworld',
    password: 'root',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
});

export default AppDataSource;

AppDataSource.initialize()
    .then(() => console.log("Data Source has been initialized"))
    .catch((error) => console.error("Error initializing Data Source", error));