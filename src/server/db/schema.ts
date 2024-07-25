// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `vstudio_${name}`);

export const projects = createTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title"),
  description: varchar("description"),
  contactNo: varchar("contact_no"),
  email: varchar("email"),
  stage: varchar("stage"),
  noOfEmployees: integer("no_of_employees"),
  noOfFounders: integer("no_of_founders"),
  investmentAmount: integer("investment_amount"),
  isRegistered: boolean("is_registered"),
  deletedAt: timestamp("deleted_at"),
  notes: varchar("notes"),

});