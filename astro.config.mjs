import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
// import vercel from "@astrojs/vercel/static";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), auth()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});