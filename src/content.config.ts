import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.string(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
