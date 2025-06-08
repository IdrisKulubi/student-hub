import { pgTable, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  profilePicture: text('profile_picture'),
  schoolDomain: text('school_domain'),
  emailReadingStreak: integer('email_reading_streak').default(0),
  totalEmailsRead: integer('total_emails_read').default(0),
  xpEarned: integer('xp_earned').default(0),
  lastEmailReadDate: timestamp('last_email_read_date'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>; 