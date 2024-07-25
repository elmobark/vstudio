// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
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

// create this tables [users,roles,permissions,role_permissions,user_roles,subscribers,subscriptions_plans,subscriptions]
export const users = createTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email").unique().notNull(),
  password: varchar("password").notNull(),
  image: varchar("image"),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const roles = createTable("roles", {
  id: serial("id").primaryKey(),
  name: varchar("name").unique().notNull(),
  description: varchar("description"),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const permissions = createTable("permissions", {
  id: serial("id").primaryKey(),
  name: varchar("name").unique().notNull(),
  description: varchar("description"),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const role_permissions = createTable("role_permissions", {
  id: serial("id").primaryKey(),
  role_id: serial("role_id").notNull(),
  permission_id: serial("permission_id").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const account = createTable("account", {
  id: serial("id").primaryKey(),
  user_id: serial("user_id").notNull(),
  name: varchar("name").notNull(),
  role_id: serial("role_id").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
export const account_roles = createTable("user_roles", {
  id: serial("id").primaryKey(),
  user_id: serial("user_id").notNull(),
  role_id: serial("role_id").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const subscribers = createTable("subscribers", {
  id: serial("id").primaryKey(),
  account_id: serial("account_id").notNull(),
  subscription_id: serial("subscription_id").notNull(),
  status: varchar("status").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const subscriptions = createTable("subscriptions", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description"),
  subscription_plans: serial("subscription_plans_id").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const subscription_plans = createTable("subscription_plans", {
  id: serial("id").primaryKey(),
  subscription_id: serial("subscription_id").notNull(),
  name: varchar("name").notNull(),
  description: varchar("description"),
  price: varchar("price").notNull(),
  duration: varchar("duration").notNull(),

  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

