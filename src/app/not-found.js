import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex items-center justify-center">
        <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9x text-black">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              href="/"
              className="p-2 bg-gray-800 text-white rounded font-bold text-sm">
              Back to Home page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
