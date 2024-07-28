import { pgTableCreator, varchar,boolean } from "drizzle-orm/pg-core";

import { users } from "./user";


const createTable = pgTableCreator((name) => `vstudio_${name}`);

export const investors = createTable("investors", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    investorName: varchar("investor_name", { length: 255 }).notNull(),
    mobileNo: varchar("mobile_no", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    investmentDomain: varchar("investment_domain", { length: 255 }).notNull(),
    lastInvestmentDesc: varchar("last_investment_desc", { length: 255 }).notNull(),
    lastInvestmentAmount: varchar("last_investment_amount", { length: 255 }).notNull(),
    image: varchar("image", { length: 255 }),
    published: boolean("published").notNull().default(false),
    createdBy: varchar("created_by", { length: 255 }).notNull().references(() => users.id),
    updatedBy: varchar("updated_by", { length: 255 }).notNull().references(() => users.id),
},

);