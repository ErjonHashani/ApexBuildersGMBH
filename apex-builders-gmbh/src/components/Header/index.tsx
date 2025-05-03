import Link from "next/link";
import { motion } from "framer-motion";
import { FaHardHat } from "react-icons/fa";

export default function Header() {
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

        {/* Center Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blog
          </Link>
        </nav>

        {/* Auth Links with Cool Button Styling */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/register"
            className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Link>
          <Link
            href="/signin"
            className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu icon */}
        <button className="md:hidden text-gray-700">
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
