import Link from "next/link";
import { excerpt } from "@/lib/text";

export default function CourseCard({ course }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
        {course.category}
      </p>
      <h2 className="mt-1 text-xl font-semibold">{course.title}</h2>
      <p className="mt-1 text-sm text-neutral-500">{course.university}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
        {excerpt(course.body)}
      </p>

      <Link
        href={`/courses/${course.slug}`}
        className="mt-4 text-sm font-semibold text-red-600 hover:underline"
      >
        View course →
      </Link>
    </article>
  );
}
