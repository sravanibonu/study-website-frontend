// "use client";

// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">

//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-indigo-600">
//           Study Web
//         </h1>

//         <div className="space-x-4">
//           <button
//             onClick={() => router.push("/login")}
//             className="px-4 py-2 text-indigo-600 font-medium"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => router.push("/register")}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow"
//           >
//             Register
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="text-center py-20 px-6">
//         <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
//           Crack Your Exams With Confidence 🚀
//         </h2>

//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
//           Practice unlimited mock tests, track your performance,
//           get detailed explanations, and improve your rank
//           with our intelligent test platform.
//         </p>

//         <div className="space-x-4">
//           <button
//             onClick={() => router.push("/register")}
//             className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
//           >
//             Get Started
//           </button>

//           <button
//             onClick={() => router.push("/dashboard")}
//             className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-xl shadow-lg hover:bg-indigo-50 transition"
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white px-8">
//         <h3 className="text-3xl font-bold text-center mb-12">
//           Why Choose Study Web?
//         </h3>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <FeatureCard
//             title="Unlimited Questions"
//             description="Practice unlimited MCQs with correct answers and detailed explanations."
//           />

//           <FeatureCard
//             title="Instant Results"
//             description="See correct and wrong answers immediately after submitting the test."
//           />

//           <FeatureCard
//             title="Live Ranking"
//             description="Compete with others and track your real-time rank on leaderboard."
//           />

//           <FeatureCard
//             title="Performance Analytics"
//             description="Detailed score breakdown and subject-wise improvement insights."
//           />

//           <FeatureCard
//             title="Timer Based Tests"
//             description="Simulate real exam environment with countdown timer."
//           />

//           <FeatureCard
//             title="Secure Authentication"
//             description="Protected login system with JWT authentication."
//           />
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-8 bg-indigo-50">
//         <h3 className="text-3xl font-bold text-center mb-12">
//           How It Works
//         </h3>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
//           <Step number="1" text="Create your account" />
//           <Step number="2" text="Start a mock test" />
//           <Step number="3" text="View results & improve" />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-white border-t">
//         <p className="text-gray-500">
//           © {new Date().getFullYear()} Study Web. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// /* ---------- Feature Card Component ---------- */

// type FeatureProps = {
//   title: string;
//   description: string;
// };

// function FeatureCard({ title, description }: FeatureProps) {
//   return (
//     <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
//       <h4 className="text-xl font-semibold mb-3 text-indigo-600">
//         {title}
//       </h4>
//       <p className="text-gray-600">
//         {description}
//       </p>
//     </div>
//   );
// }

// /* ---------- Step Component ---------- */

// type StepProps = {
//   number: string;
//   text: string;
// };

// function Step({ number, text }: StepProps) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow">
//       <div className="text-3xl font-bold text-indigo-600 mb-3">
//         {number}
//       </div>
//       <p className="text-gray-700">{text}</p>
//     </div>
//   );
// }











// "use client";

// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800">

//       {/* 🔵 HERO SECTION */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 text-center">
//         <h1 className="text-5xl font-bold mb-6">
//           Crack Your Exams with Smart Test Series 🚀
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto mb-8">
//           Practice unlimited MCQ tests, get instant results with explanations,
//           track your performance, and compete with thousands of students.
//         </p>

//         <div className="flex justify-center gap-4">
//           <Link
//             href="/register"
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
//           >
//             Get Started
//           </Link>
//           <Link
//             href="/login"
//             className="bg-black px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
//           >
//             Login
//           </Link>
//         </div>
//       </section>

//       {/* 🟢 FEATURES SECTION */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-14">
//           Why Choose Our Platform?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           <FeatureCard
//             title="Unlimited Questions"
//             desc="Access unlimited MCQs with detailed explanations."
//           />
//           <FeatureCard
//             title="Instant Result Analysis"
//             desc="See correct, wrong answers & explanation instantly."
//           />
//           <FeatureCard
//             title="Live Ranking"
//             desc="Check your position among all test participants."
//           />
//         </div>
//       </section>

//       {/* 🟡 TEST PREVIEW */}
//       <section className="bg-white py-20 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Popular Test Series
//         </h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           <TestCard title="SSC CGL Mock Series" questions="5000+ Questions" />
//           <TestCard title="Banking PO Test Series" questions="4200+ Questions" />
//           <TestCard title="UPSC Prelims Practice" questions="8000+ Questions" />
//         </div>
//       </section>

//       {/* 🟣 HOW IT WORKS */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-14">
//           How It Works
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8 text-center">
//           <Step number="1" text="Register Account" />
//           <Step number="2" text="Purchase Test Series" />
//           <Step number="3" text="Attempt Test" />
//           <Step number="4" text="Get Rank & Analysis" />
//         </div>
//       </section>

//       {/* 🔴 CTA */}
//       <section className="bg-blue-600 text-white text-center py-16 px-6">
//         <h2 className="text-3xl font-bold mb-6">
//           Start Your Preparation Today 💪
//         </h2>
//         <Link
//           href="/register"
//           className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
//         >
//           Join Now
//         </Link>
//       </section>

//       {/* ⚫ FOOTER */}
//       <footer className="bg-black text-white text-center py-6">
//         © {new Date().getFullYear()} Study Web. All rights reserved.
//       </footer>

//     </div>
//   );
// }

// /* 🔹 Reusable Components */

// function FeatureCard({ title, desc }: { title: string; desc: string }) {
//   return (
//     <div className="bg-white p-8 shadow rounded-xl text-center hover:shadow-lg transition">
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-gray-600">{desc}</p>
//     </div>
//   );
// }

// function TestCard({ title, questions }: { title: string; questions: string }) {
//   return (
//     <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{questions}</p>
//       <Link
//         href="/login"
//         className="text-blue-600 font-semibold hover:underline"
//       >
//         Attempt Now →
//       </Link>
//     </div>
//   );
// }

// function Step({ number, text }: { number: string; text: string }) {
//   return (
//     <div>
//       <div className="bg-blue-600 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold mb-4">
//         {number}
//       </div>
//       <p className="font-semibold">{text}</p>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">

//       {/* 🔷 NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
//         <h1 className="text-2xl font-bold text-blue-600">StudyWeb</h1>
//         <div className="space-x-6 hidden md:block">
//           <Link href="/" className="hover:text-blue-600">Home</Link>
//           <Link href="/tests" className="hover:text-blue-600">Tests</Link>
//           <Link href="/about" className="hover:text-blue-600">About</Link>
//           <Link href="/contact" className="hover:text-blue-600">Contact</Link>
//         </div>
//         <div className="space-x-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
//           >
//             Login
//           </Link>
//           <Link
//             href="/register"
//             className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Register
//           </Link>
//         </div>
//       </nav>

//       {/* 🔵 HERO SECTION */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28 px-6 text-center">
//         <h1 className="text-5xl font-bold mb-6 leading-tight">
//           Crack Competitive Exams <br /> With Smart Practice 🚀
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto mb-10">
//           Practice unlimited MCQs, get instant performance insights,
//           detailed explanations, and compete with thousands of students.
//         </p>

//         <Link
//           href="/register"
//           className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
//         >
//           Start Free Now
//         </Link>
//       </section>

//       {/* 🟢 FEATURES */}
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Why Choose StudyWeb?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           <FeatureCard
//             title="Unlimited Practice"
//             desc="Access thousands of MCQs with detailed solutions."
//           />
//           <FeatureCard
//             title="Instant Analytics"
//             desc="Track accuracy, speed & performance instantly."
//           />
//           <FeatureCard
//             title="Live Rankings"
//             desc="Compete with real aspirants & improve daily."
//           />
//         </div>
//       </section>

//       {/* 🟡 POPULAR TEST SERIES */}
//       <section className="bg-white py-24 px-6">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Popular Test Series
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           <TestCard title="SSC CGL Mock Series" questions="5000+ Questions" />
//           <TestCard title="Banking PO Test Series" questions="4200+ Questions" />
//           <TestCard title="UPSC Prelims Practice" questions="8000+ Questions" />
//         </div>
//       </section>

//       {/* 🟣 HOW IT WORKS */}
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           How It Works
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8 text-center">
//           <Step number="1" text="Create Account" />
//           <Step number="2" text="Choose Test Series" />
//           <Step number="3" text="Attempt Test" />
//           <Step number="4" text="View Rank & Analysis" />
//         </div>
//       </section>

//       {/* 🔴 CALL TO ACTION */}
//       <section className="bg-blue-600 text-white text-center py-20 px-6">
//         <h2 className="text-4xl font-bold mb-6">
//           Ready to Boost Your Preparation? 💪
//         </h2>
//         <p className="mb-8 text-lg">
//           Join thousands of students already preparing smarter.
//         </p>
//         <Link
//           href="/register"
//           className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
//         >
//           Join Now
//         </Link>
//       </section>

//       {/* ⚫ FOOTER */}
//       <footer className="bg-black text-white py-10">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
//           <div>
//             <h3 className="font-semibold text-lg mb-4">StudyWeb</h3>
//             <p>Smart online test platform for competitive exam preparation.</p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/contact">Contact</Link></li>
//               <li><Link href="/privacy">Privacy Policy</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Contact</h3>
//             <p>Email: support@studyweb.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>

//         <div className="text-center mt-10 text-gray-400 text-sm">
//           © {new Date().getFullYear()} StudyWeb. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// /* 🔹 Reusable Components */

// function FeatureCard({ title, desc }: { title: string; desc: string }) {
//   return (
//     <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-gray-600">{desc}</p>
//     </div>
//   );
// }

// function TestCard({ title, questions }: { title: string; questions: string }) {
//   return (
//     <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p className="text-gray-600 mb-6">{questions}</p>
//       <Link
//         href="/login"
//         className="text-blue-600 font-semibold hover:underline"
//       >
//         Attempt Now →
//       </Link>
//     </div>
//   );
// }

// function Step({ number, text }: { number: string; text: string }) {
//   return (
//     <div>
//       <div className="bg-blue-600 text-white w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold mb-4 text-lg">
//         {number}
//       </div>
//       <p className="font-semibold">{text}</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { BookOpen, BarChart3, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">




      <Navbar></Navbar>

      {/* 🔵 HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Crack Competitive Exams <br /> With Smart Practice 
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
          Practice unlimited MCQs, track performance, get instant analysis
          and compete with thousands of aspirants.
        </p>

        <Link
          href="/register"
          className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Start Free Now
        </Link>
      </section>

      {/* 🟢 FEATURES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose StudyWeb?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <FeatureCard
            icon={<BookOpen size={28} />}
            title="Unlimited Practice"
            desc="Access thousands of MCQs with detailed explanations."
          />

          <FeatureCard
            icon={<BarChart3 size={28} />}
            title="Instant Analytics"
            desc="Track accuracy, speed and improvement in real-time."
          />

          <FeatureCard
            icon={<Trophy size={28} />}
            title="Live Rankings"
            desc="Compete with aspirants and climb the leaderboard."
          />

        </div>
      </section>

      {/* 🟡 TEST SERIES */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Popular Test Series
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <TestCard
            title="SSC CGL Mock Series"
            questions="5000+ Questions"
          />

          <TestCard
            title="Banking PO Test Series"
            questions="4200+ Questions"
          />

          <TestCard
            title="UPSC Prelims Practice"
            questions="8000+ Questions"
          />

        </div>
      </section>

      {/* 🟣 HOW IT WORKS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <Step number="1" text="Create Account" />
          <Step number="2" text="Choose Test Series" />
          <Step number="3" text="Attempt Test" />
          <Step number="4" text="View Rank & Analysis" />

        </div>
      </section>

      {/* 🔴 CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Boost Your Preparation? 💪
        </h2>

        <p className="mb-8 text-lg opacity-90">
          Join thousands of students preparing smarter.
        </p>

        <Link
          href="/register"
          className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Join Now
        </Link>
      </section>

      {/* ⚫ FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="font-semibold text-lg mb-4">StudyWeb</h3>
            <p>
              Smart online test platform for competitive exam preparation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p>Email: support@studyweb.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          © {new Date().getFullYear()} StudyWeb. All rights reserved.
        </div>
      </footer>

    </div>
  );
}


/* 🔹 Feature Card */

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition text-center">

      <div className="text-blue-600 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>

    </div>
  );
}


/* 🔹 Test Card */

function TestCard({ title, questions }: any) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition border">

      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-6">
        {questions}
      </p>

      <Link
        href="/login"
        className="text-blue-600 font-semibold hover:underline"
      >
        Attempt Now →
      </Link>

    </div>
  );
}


/* 🔹 Steps */

function Step({ number, text }: any) {
  return (
    <div>

      <div className="bg-blue-600 text-white w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold mb-4 text-lg shadow-lg">
        {number}
      </div>

      <p className="font-semibold">
        {text}
      </p>

    </div>
  );
}