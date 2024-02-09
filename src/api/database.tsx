import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';


// use this object to send drizzle queries to your DB
export const db = drizzle(sql);

// create a pgTables that map to our tables
export const campaign = pgTable(
    'campaign', 
    {
        campaign_id: serial('campaign_id').primaryKey(),
        // TODO: finish this mapping
        name: text('name').notNull(),
        description: text('description'),
        creator_name: text('creator_name'),
        created_at: timestamp('createdAt').defaultNow().notNull(),
        user_id: text('user_id').notNull(), // this is text because the auth0 user_id is a string
    },
    // not sure what this does exactly, I think it indexes the column lol
    (campaign) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(campaign.campaign_id)
        }
    }
)