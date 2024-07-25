import { sql } from "drizzle-orm";
import {  boolean,
    integer,
    numeric,
    pgTableCreator,
    serial,
    timestamp,
    varchar,} from "drizzle-orm/pg-core";


export const createTable = pgTableCreator((name) => `vstudio_${name}`);

export const users = createTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email"),
    phone: numeric("phone"),
    firstName: varchar("first_name"),
    lastName: varchar("last_name"),
    password: varchar("password"),
});
