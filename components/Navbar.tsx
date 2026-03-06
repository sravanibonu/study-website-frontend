// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/100 border-b border-gray-200">

//       <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Image
//           src="/logo.png"
//           alt="Quizaro Logo"
//           width={150}
//           height={50}
//           className="h-10 w-auto"
//         />

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
//           <Link href="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>

//           <Link href="/tests" className="hover:text-blue-600 transition">
//             Tests
//           </Link>

//           <Link href="/about" className="hover:text-blue-600 transition">
//             About
//           </Link>

//           <Link href="/contact" className="hover:text-blue-600 transition">
//             Contact
//           </Link>
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex items-center space-x-3">

//           <Link
//             href="/login"
//             className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition duration-300"
//           >
//             Register
//           </Link>

//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-gray-700"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-8 pb-6 space-y-4 font-medium">

//           <Link href="/" className="block hover:text-blue-600">
//             Home
//           </Link>

//           <Link href="/tests" className="block hover:text-blue-600">
//             Tests
//           </Link>

//           <Link href="/about" className="block hover:text-blue-600">
//             About
//           </Link>

//           <Link href="/contact" className="block hover:text-blue-600">
//             Contact
//           </Link>

//           <div className="flex gap-3 pt-4">
//             <Link
//               href="/login"
//               className="w-full text-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600"
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               className="w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white"
//             >
//               Register
//             </Link>
//           </div>

//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { JSX } from "react/jsx-dev-runtime";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Quizaro Logo"
            width={200}
            height={80}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-lg">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/tests"
            className="hover:text-blue-600 transition"
          >
            Tests
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            href="/login"
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
          >
            Register
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-8 pb-6">

          <div className="flex flex-col gap-4 pt-4 text-gray-700 font-medium">

            <Link href="/">Home</Link>
            <Link href="/tests">Tests</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </div>

          <div className="flex gap-3 pt-5">

            <Link
              href="/login"
              className="w-full text-center px-4 py-2 border border-blue-500 text-blue-600 rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Register
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}