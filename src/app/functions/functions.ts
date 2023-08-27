export function slugify(text: string): string {
  return text
    ?.toLowerCase()
    ?.replace(/[^a-zA-Z0-9]+/g, "-")
    ?.replace(/^-+/, "")
    ?.replace(/-+$/, "");
}
