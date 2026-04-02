import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().default(false),
    categories: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "categories must be unique",
      })
      .optional(),
    tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
  }),
});

const moments = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    type: z.enum(["Photo", "Note", "Video", "Live", "Sayings"]),
    icon: z.string(),
    badge: z.string(),
    mood: z.string(),
    accent: z.enum(["aurora", "rose", "copper", "nocturne", "linen"]),
    cover: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    duration: z.string().optional(),
    noteTitle: z.string().optional(),
    noteBody: z.string().optional(),
    location: z.string().optional(),
    music: z.string().optional(),
    storyTitle: z.string().optional(),
    storySubtitle: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, moments };
