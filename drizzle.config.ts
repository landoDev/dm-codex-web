import type { Config } from "drizzle-kit";

export default {
    dbCredentials: {
      connectionString: process.env.POSTGRES_URL,
    }
  } as Config;