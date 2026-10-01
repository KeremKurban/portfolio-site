export const PORTFOLIO_REPO = "KeremKurban/portfolio";
export const PORTFOLIO_BRANCH = "main";
export const REPO_RAW_PREFIX = `https://raw.githubusercontent.com/${PORTFOLIO_REPO}/`;
export const LEGACY_CDN_HOST = "ucarecdn.com";

// `ref` can be a branch or a commit hash (pin a file version so later uploads don't change it).
export function repoAsset(path: string, ref: string = PORTFOLIO_BRANCH): string {
  return `${REPO_RAW_PREFIX}${ref}/${path.split("/").map(encodeURIComponent).join("/")}`;
}

// Images still hosted on create.xyz's Uploadcare CDN. They may disappear once the
// create.xyz account lapses: copy each into the portfolio repo and switch to repoAsset().
export function legacyCdn(id: string): string {
  return `https://${LEGACY_CDN_HOST}/${id}/-/format/auto/`;
}
