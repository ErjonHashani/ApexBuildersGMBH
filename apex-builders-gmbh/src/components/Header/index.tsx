import Link from "next/link";
import { motion } from "framer-motion";
import { FaHardHat } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-white shadow-sm z-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <FaHardHat className="text-blue-600 text-2xl group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
            Apex Builders GmbH
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-blue-600 font-medium" : "text-gray-700"
            } hover:text-blue-600 transition px-2 py-1 rounded-md`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-blue-600 font-medium" : "text-gray-700"
            } hover:text-blue-600 transition px-2 py-1 rounded-md`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact")
                ? "text-blue-600 font-medium"
                : "text-gray-700"
            } hover:text-blue-600 transition px-2 py-1 rounded-md`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${
              isActive("/blog") ? "text-blue-600 font-medium" : "text-gray-700"
            } hover:text-blue-600 transition px-2 py-1 rounded-md`}
          >
            Blog
          </Link>
          <Link
            href="/news"
            className={`${
              isActive("/news") ? "text-blue-600 font-medium" : "text-gray-700"
            } hover:text-blue-600 transition px-2 py-1 rounded-md`}
          >
            News
          </Link>

          {/* Dashboard Link - Only visible when authenticated */}
          {status === "authenticated" && (
            <Link
              href="/dashboard"
              className={`${
                isActive("/dashboard")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50"
              } font-medium transition px-3 py-2 rounded-md flex items-center space-x-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Dashboard</span>
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {status === "loading" ? (
            <div className="h-10 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          ) : session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-700 hover:text-red-600 transition flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Sign Out</span>
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition px-3 py-2 rounded-md font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 hover:bg-blue-700 text-white transition px-4 py-2 rounded-md font-medium shadow-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
