import { put, list } from "@vercel/blob";
import { defaultContent, type SiteContent } from "./content";

const BLOB_KEY = "site-content.json";

export async function getContent(): Promise<SiteContent> {
  try {
    const blobs = await list({ prefix: BLOB_KEY });
    const found = blobs.blobs.find((b) => b.pathname === BLOB_KEY);
    if (!found) return defaultContent;

    const res = await fetch(found.url, { next: { revalidate: 60 } });
    const saved = (await res.json()) as Partial<SiteContent>;
    return deepMerge(defaultContent, saved);
  } catch {
    return defaultContent;
  }
}

export async function saveContent(content: SiteContent): Promise<void> {
  await put(BLOB_KEY, JSON.stringify(content, null, 2), {
    access: "public",
    addRandomSuffix: false,
  });
}

function deepMerge<T extends Record<string, unknown>>(
  defaults: T,
  overrides: Partial<T>,
): T {
  const result = { ...defaults };
  for (const key of Object.keys(defaults) as (keyof T)[]) {
    const dVal = defaults[key];
    const oVal = overrides[key];
    if (
      oVal !== undefined &&
      typeof dVal === "object" &&
      dVal !== null &&
      !Array.isArray(dVal) &&
      typeof oVal === "object" &&
      oVal !== null
    ) {
      result[key] = deepMerge(
        dVal as Record<string, unknown>,
        oVal as Record<string, unknown>,
      ) as T[keyof T];
    } else if (oVal !== undefined) {
      result[key] = oVal as T[keyof T];
    }
  }
  return result;
}
