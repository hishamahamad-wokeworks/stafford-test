import { getCourses } from "@/lib/cms";
import CourseCard from "@/components/CourseCard";

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <section>
      <h1 className="text-3xl font-bold">Find your course</h1>
      <p className="mt-2 text-neutral-600">
        {courses.length} online programmes from our partner universities.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}
