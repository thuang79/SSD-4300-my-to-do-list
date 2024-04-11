import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

import { lists as listsTable } from "@my-to-do-list/core/db/schema/lists";
import { db } from "@my-to-do-list/core/db";

const app = new Hono();

app.get("/lists", async (c) => {
  const lists = await db.select().from(listsTable);
  return c.json({ lists });
});

app.post("/lists", async (c) => {
  const body = await c.req.json()
  const list = body.list
  const newList = await db.insert(listsTable).values(list).returning();
    return c.json({ lists: newList });
});

export const handler = handle(app);