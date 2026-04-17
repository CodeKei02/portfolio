import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const en = defineCollection({
  loader: glob({ base: "./src/content/en", pattern: "**/*.json" }),
  schema: z.any(),
});

const es = defineCollection({
  loader: glob({ base: "./src/content/es", pattern: "**/*.json" }),
  schema: z.any(),
});

export const collections = { en, es };
