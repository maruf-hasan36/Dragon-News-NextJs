"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <h1
          className={`text-8xl md:text-9xl font-extrabold tracking-widest transition-all duration-700 ${
            glow
              ? "text-blue-400 drop-shadow-[0_0_25px_#3b82f6]"
              : "text-gray-300"
          }`}
        >
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-relaxed">
          The page youre looking for doesn’t exist or has been moved. Don’t
          worry, you can go back to the homepage or explore something else.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
          >
            ⬅ Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition font-medium"
          >
            🔙 Go Back
          </button>
        </div>

        {/* Decorative line */}
        <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        {/* Footer */}
        <p className="mt-4 text-sm text-gray-500">
          Error code: 404 • Lost in space 🚀
        </p>
      </div>
    </div>
  );
}
