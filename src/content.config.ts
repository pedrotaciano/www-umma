import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({
    base: "./src/products",
    pattern: "**/*.{md,mdx}",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      caption: z.string().optional(),
      compatibility: z.enum(["Liso", "Ondulado", "Cacheado", "Crespo"]),
      tags: z.array(z.string()).optional(),
      price: z.string(),
      link: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { products };
