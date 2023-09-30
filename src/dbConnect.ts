import { DataSource } from "typeorm";
import {Photo} from "./entries/Photo"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm",
    entities:[Photo],
    synchronize: true
})

export default AppDataSource;