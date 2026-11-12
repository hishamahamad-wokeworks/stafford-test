import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Stafford Courses",
  description: "Online degrees from leading universities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
