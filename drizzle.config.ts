import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schemas/index.ts",
  out: "./src/server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  verbose: true,
  strict: true,
  tablesFilter: ["vstudio_*"],
} satisfies Config;
