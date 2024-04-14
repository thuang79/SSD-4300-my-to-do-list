import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

import { lists as listsTable } from "@my-to-do-list/core/db/schema/lists";
import { db } from "@my-to-do-list/core/db";
import { eq } from "drizzle-orm";

import { authMiddleware } from "@my-to-do-list/core/db/auth";

const app = new Hono();

app.get("/lists", authMiddleware, async (c) => {
  const userId = c.var.userId;
  const lists = await db
    .select()
    .from(listsTable)
    .where(eq(listsTable.userId, userId ));
  return c.json({ lists });
});


app.post("/lists", authMiddleware, async (c) => {
  const userId = c.var.userId
  const body = await c.req.json()
  const list = {
    ...body.list,
    userId,
  }
  const newList = await db.insert(listsTable).values(list).returning()
  return c.json({ lists: newList });
});

export const handler = handle(app);