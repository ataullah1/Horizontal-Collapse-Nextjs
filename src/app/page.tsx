import GitHubCorner from "@/components/GithubCorner";
import HorizontalCollapse from "@/components/HorizontalCollapse";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <h1 className="text-4xl text-center font-bold py-10">
        Horizontal Collapse Nextjs
      </h1>

      {/* Main Component------------- */}
      <main className="h-full w-full flex items-center justify-center border border-gray-700 rounded-xl container mx-auto my-20">
        <GitHubCorner />
        <HorizontalCollapse />
      </main>

      {/* Footer ------ */}
      <footer className="text-center py-4 text-gray-200 border-t border-gray-600">
        <p>
          &copy; {new Date().getFullYear()} | Developed with ❤️ by{" "}
          <Link
            href="https://www.linkedin.com/in/md-ataullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Md. Ataullah
          </Link>
        </p>
      </footer>
    </div>
  );
}
