import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Stafford <span className="text-red-600">Courses</span>
        </Link>
        <nav className="text-sm text-neutral-600">Online degrees</nav>
      </div>
    </header>
  );
}
