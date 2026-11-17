/** One build-time policy for robots metadata, HTTP headers and sitemap output. */
export const isIndexable =
  process.env.INDEXABLE === "true" && process.env.VERCEL_ENV !== "preview";

if (isIndexable && !process.env.SITE_URL) {
  throw new Error(
    "An indexable build requires SITE_URL set to the approved public HTTPS origin.",
  );
}
const configuredUrl = new URL(
  process.env.SITE_URL || "https://www.espressov.com",
);
if (
  configuredUrl.protocol !== "https:" ||
  configuredUrl.username ||
  configuredUrl.password ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search ||
  configuredUrl.hash
) {
  throw new Error(
    "SITE_URL must be a public HTTPS origin without credentials, path, query or fragment.",
  );
}
export const canonicalOrigin = configuredUrl.origin;
