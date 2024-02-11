import { campaign, db } from "./database"

export type NewCampaign = typeof campaign.$inferInsert;

export const insertCampaign = async (newCampaign: NewCampaign) => {
    return await db.insert(campaign).values(newCampaign)
};