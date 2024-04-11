import {
    pgTable,
    text,
    varchar,
    timestamp,
    index,
    serial,
} from "drizzle-orm/pg-core";

export const lists = pgTable(
    "lists",
    {
        id: serial("id").primaryKey(),
        userId: text("user_id").notNull(),
        title: varchar("title", { length: 100 }).notNull(),
        createdAt: timestamp("created_at", { withTimezone: true })
            .notNull()
            .defaultNow(),
    },
    (table) => {
        return {
            nameIdx: index("user_id_idx").on(table.userId),
        };
    }
);
