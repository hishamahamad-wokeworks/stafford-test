// Text helpers used across the site.

// Short preview of a course description, used on the course cards.
export function excerpt(body, length = 160) {
  const text = String(body);
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "…";
}
