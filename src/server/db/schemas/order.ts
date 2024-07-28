// export class OrderDetailClass {

import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";

 
export enum OrderStatus {
    Draft = "Draft",
    Pending = "Pending",
    Completed = "Completed",
    Cancelled = "Cancelled",
}
export const orderStatusEnum = pgEnum('order_status', ['Draft', 'Pending', 'Completed', 'Cancelled']);


const createTable = pgTableCreator((name) => `vstudio_${name}`);
 
export const orders = createTable("orders", {
    id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    note: varchar("note", { length: 255 }),
    status: orderStatusEnum('status').default(OrderStatus.Draft),
    tax: integer("tax"),
    taxPercentage: integer("tax_percentage"),
    discount: integer("discount"),
    discountPercentage: integer("discount_percentage"),
    itemsTotal: integer("items_total"),
    grandTotal: integer("grand_total"),
    createdAt: timestamp("created_at"),
    customer: varchar("customer", { length: 255 }),
    createdBy: varchar("created_by", { length: 255 }),
    updatedBy: varchar("updated_by", { length: 255 }),
},
);

export const orderDetails = createTable("order_details", {
    id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    orderId: varchar("order_id", { length: 255 }).notNull().references(() => orders.id),
    item: varchar("item", { length: 255 }),
    qty: integer("qty"),
    price: integer("price"),
    lineTotal: integer("line_total"),
},
);
export const orderRelations = relations(orders, ({ many }) => ({
    orderDetails: many(orderDetails),
}));

export const orderDetailsRelations = relations(orderDetails, ({ one }) => ({
    order: one(orders),
}));