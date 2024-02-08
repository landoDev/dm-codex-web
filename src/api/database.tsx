import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { pgTable, serial } from 'drizzle-orm/pg-core';


// use this object to send drizzle queries to your DB
export const db = drizzle(sql);

// create a pgTables that map to our tables
export const CampaignTable = pgTable(
    'campaign', 
    {
        campaign_id: serial('campaign_id').primaryKey()
        // TODO: finish this mapping
    }
)