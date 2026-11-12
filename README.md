# Stafford Courses — Practice Project

A small Next.js site that lists online courses. Content comes from a CMS;
in this project the CMS is simulated with a local JSON file.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

Before you change anything, create your own branch:

```bash
git checkout -b yourname/assessment
```

## How the project is organised

| Folder / file     | What's in it                                                   |
| ----------------- | -------------------------------------------------------------- |
| `app/`            | Pages. `app/page.js` is the home page with the course list.    |
| `components/`     | Reusable pieces of UI, like `CourseCard.js`.                   |
| `lib/cms.js`      | The CMS client: `getCourses()` and `getCourse(slug)`.          |
| `lib/text.js`     | Small text helpers.                                            |
| `data/`           | The simulated CMS content.                                     |

## Conventions

- Get content through `lib/cms.js`. Pages and components shouldn't import
  from `data/` directly. (On the real site, `lib/cms.js` will call the CMS.)
- Pages fetch their data on the server. If a component needs `useState` or
  an `onClick`, put it in its own small file with `"use client";` at the top.
- Style with Tailwind classes.
- Please don't install new packages.
- Commit after each task:

  ```bash
  git add .
  git commit -m "Short description of what you changed"
  ```

## Tasks

Work through them in order. It's fine not to finish them all.

**Warm-up.** Each course card should also show how long the course takes
(for example, "18 months").

**Task 1.** Something is wrong on the course list. Find it and fix it.

**Task 2.** Let visitors filter the course list by category.

**Task 3 (stretch).** Each course should have its own page at
`/courses/<slug>`. At the moment, "View course" leads to a 404.

If anything is unclear, ask.

## Useful documentation

- React: https://react.dev/learn
- Next.js: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
