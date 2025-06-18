"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { InlineWidget } from "react-calendly";
import Link from "next/link";

export default function BookMeetingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] py-8 px-4 bg-gray-50">
        <Link
          href="/"
          className="mb-6 inline-block px-6 py-2 rounded-full bg-[#5A8C4A] text-white font-semibold shadow hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
        >
          ← Go Back to Home
        </Link>
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-[#5A8C4A]">
            Book a Meeting
          </h1>
          <InlineWidget
            url="https://calendly.com/nephtalemwoldeyohanes/new-meeting"
            styles={{ minHeight: 600 }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
