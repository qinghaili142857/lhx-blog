import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getAllMoments(): Promise<CollectionEntry<"moments">[]> {
  const entries = await getCollection("moments");
  const visible = import.meta.env.PROD ? entries.filter((entry) => !entry.data.draft) : entries;
  return [...visible].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getMomentFilters(entries: CollectionEntry<"moments">[]) {
  const types = Array.from(new Set(entries.map((entry) => entry.data.type)));
  return ["All", ...types];
}
