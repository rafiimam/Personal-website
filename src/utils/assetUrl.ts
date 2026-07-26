/**
 * Resolves a public asset path using Vite's BASE_URL.
 * In dev: BASE_URL is "/"  →  "/Assets/file.pdf"
 * In production (GitHub Pages): BASE_URL is "/Personal-website/"  →  "/Personal-website/Assets/file.pdf"
 */
export function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = relativePath.replace(/^\.\//, '');
  if (base === './' || base === '') {
    return `./${clean}`;
  }
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${clean}`;
}
