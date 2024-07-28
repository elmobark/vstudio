import { boolean, integer, pgTableCreator, text, varchar } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";
import { users } from "./user";


const createTable = pgTableCreator((name) => `vstudio_${name}`);

export const businessDomain = createTable("business_domain", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    domainName: varchar("domain_name", { length: 255 }).notNull(),
    desc: text("desc"),
    image: varchar("image", { length: 255 }),
    isActive: boolean("is_active").notNull().default(false),
    sortIndex: integer("sort_index").notNull().default(0),
    createdBy: varchar("created_by", { length: 255 }).notNull().references(() => users.id),
    updatedBy: varchar("updated_by", { length: 255 }).notNull().references(() => users.id),
    
},

);

export const businessDomainRelations = relations(businessDomain, ({ many }) => ({
    activities: many(activities),
}));

export const activities = createTable("activity", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    activityName: varchar("activity_name", { length: 255 }).notNull(),
    desc: text("desc"),
    image: varchar("image", { length: 255 }),
    isActive: boolean("is_active").notNull().default(false),
    sortIndex: integer("sort_index").notNull().default(0),
    businessDomain: varchar("business_domain", { length: 255 }).notNull().references(() => businessDomain.id),
    createdBy: varchar("created_by", { length: 255 }).notNull().references(() => users.id),
    updatedBy: varchar("updated_by", { length: 255 }).notNull().references(() => users.id),
    
},

);