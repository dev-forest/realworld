import { DataSourceOptions } from "typeorm";

const ormconfig: DataSourceOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username:'realworld',
    database: 'realworld',
    password: 'root',
}

export default ormconfig;