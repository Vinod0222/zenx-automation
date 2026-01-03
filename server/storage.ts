import { db } from "./db";
import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
