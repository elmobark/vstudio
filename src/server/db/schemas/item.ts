// class ItemCategoryClass {

import { relations, sql } from "drizzle-orm";
import { boolean, integer, pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";

    

const createTable = pgTableCreator((name) => `vstudio_${name}`);

export const itemCategories = createTable("item_categories", {
    id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    categoryName: varchar("category_name", { length: 255 }).notNull(),
    image: varchar("image", { length: 255 }),
    isActive: boolean("is_active").notNull().default(false),
    pinToMainMenu: boolean("pin_to_main_menu").notNull().default(false),
    sortIndex: integer("sort_index").notNull().default(0),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    updatedBy: varchar("updated_by", { length: 255 }).notNull(),
},
);

export const itemCategoriesRelations = relations(itemCategories, ({ many }) => ({
   items: many(items),
}));

export const items = createTable("items", {
    id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    itemName: varchar("item_name", { length: 255 }).notNull(),
    summaryDesc: varchar("summary_desc", { length: 255 }).notNull(),
    desc: varchar("desc", { length: 255 }).notNull(),
    store: varchar("store", { length: 255 }).notNull(),
    businessDomain: varchar("business_domain", { length: 255 }).notNull(),
    businessActivity: varchar("business_activity", { length: 255 }).notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    budget: integer("budget").notNull(),
    faqLines: varchar("faq_lines", { length: 255 }).notNull(),
    serviceLines: varchar("service_lines", { length: 255 }).notNull(),
    featureBoxes: varchar("feature_boxes", { length: 255 }).notNull(),
    stepsLines: varchar("steps_lines", { length: 255 }).notNull(),
    price: integer("price").notNull(),
    image: varchar("image", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(false),
    isHomePage: boolean("is_home_page").notNull().default(false),
    sortIndex: integer("sort_index").notNull().default(0),
    deliveryPeriod: varchar("delivery_period", { length: 255 }).notNull(),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    updatedBy: varchar("updated_by", { length: 255 }).notNull(),
    createdAt: timestamp("created_at",).notNull().default(sql`CURRENT_TIMESTAMP`),
},
);

export const itemsRelations = relations(items, ({ many }) => ({
    itemCategories: many(itemCategories),
    areas: many(areas),
}));

export const areas = createTable("areas", {
    id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    areaName: varchar("area_name", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(false),
    sortIndex: integer("sort_index").notNull().default(0),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    updatedBy: varchar("updated_by", { length: 255 }).notNull(),
},
);

export const areasRelations = relations(areas, ({ many }) => ({
    items: many(items),
}));

