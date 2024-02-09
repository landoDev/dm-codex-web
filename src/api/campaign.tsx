import { campaign, db } from "./database"

type NewCampaign = typeof campaign.$inferInsert;

export const insertCampaign = async (newCampaign: NewCampaign) => {
    return db.insert(campaign).values(newCampaign)
};