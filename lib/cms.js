// CMS client.
// In this practice project the "CMS" is the JSON file in /data.
// On the real site these functions will call the CMS API instead,
// so the rest of the app should only ever get content through here.

import courses from "@/data/courses.json";

// Simulates network latency so the app behaves like it would with a real CMS.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Returns a copy so callers can't accidentally change the source data.
function copy(value) {
  return JSON.parse(JSON.stringify(value));
}

export async function getCourses() {
  await delay(100);
  return copy(courses);
}

export async function getCourse(slug) {
  await delay(100);
  const course = courses.find((c) => c.slug === slug);
  return course ? copy(course) : null;
}
