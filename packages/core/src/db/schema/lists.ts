import {
    pgTable,
    text,
    varchar,
    index,
    serial,
}   from "drizzle-orm/pg-core";

export const lists = pgTable(
    "expenses",
    {
        id: serial("id").primaryKey(),
        userId: text("user_id").notNull(),
        title: varchar("title", {length: 100}).notNull(),
    },
    (table) => {
        return{
            nameIdx: index("userId_idx").on(table.userId),
        };
    },
);