import { ArangoDbConfig } from "./arango-db.config.interface";
import { Database, aql } from "arangojs";

export const createDriver = async (config: ArangoDbConfig) => {


    const db = new Database({
        url: config.url,
        auth: { username: config.username, password: config.password },
        databaseName: config.database
    });
    console.log("created new database connection");
    //await driver.verifyConnectivity()

    return db;
}