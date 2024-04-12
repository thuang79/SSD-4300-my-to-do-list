import { Hono } from "hono";

import { lists as listsTable } from "@my-to-do-list/core/db/schema/lists";
import { db } from "@my-to-do-list/core/db";

import { authMiddleware } from "@my-to-do-list/core/db/auth";
import { handle } from "hono/aws-lambda";

const app = new Hono();

app.get("/lists", authMiddleware, async (c) => {
  const userId = c.var.userId
  const lists = await db.select().from(listsTable);
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
  return c.json({ list: newList });
});

export const handler = handle(app);