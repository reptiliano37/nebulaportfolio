// Lightweight Markdown → HTML renderer shared by the engineering pages.
// Supports: ## h2, ### h3, **bold**, `code`, and "- " unordered lists.

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function parseMarkdown(md: string): string {
  const lines = md.split("\n");
  const output: string[] = [];
  let inList = false;

  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  for (const raw of lines) {
    const line = raw.trim();

    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      if (inList) { output.push("</ul>"); inList = false; }
      output.push(`<h2 id="${slugify(h2[1])}">${inline(h2[1])}</h2>`);
      continue;
    }

    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      if (inList) { output.push("</ul>"); inList = false; }
      output.push(`<h3 id="${slugify(h3[1])}">${inline(h3[1])}</h3>`);
      continue;
    }

    const li = line.match(/^- (.+)$/);
    if (li) {
      if (!inList) { output.push("<ul>"); inList = true; }
      output.push(`<li>${inline(li[1])}</li>`);
      continue;
    }

    if (inList) { output.push("</ul>"); inList = false; }

    if (line === "") {
      output.push("");
      continue;
    }

    output.push(`<p>${inline(line)}</p>`);
  }

  if (inList) output.push("</ul>");

  return output.join("\n");
}
