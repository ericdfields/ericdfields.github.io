import { z, defineCollection } from "astro:content"

const workCollection = defineCollection({
  type: "content",
  schema: z.object({ 
    title: z.string(), 
    description: z.string(), 
    heroImage: z.string().url().default("https://example.com/placeholder.jpg"), 
    timeframe: z.string() 
  })
})

export const collections = {
  "work": workCollection
}
