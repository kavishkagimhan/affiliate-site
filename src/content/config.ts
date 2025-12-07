import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Admin'),
    affiliateLink: z.string().url().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};

