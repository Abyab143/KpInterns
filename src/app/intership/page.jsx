"use client";

import { useState } from "react";
import Link from "next/link";

export default function InternshipPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white dark:bg-bg-card rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-border-main backdrop-blur-sm text-center animate-fade-in">
          {/* Icon Section */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 dark:from-brand-primary/30 dark:to-brand-secondary/30 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary animate-float"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-.5 0-.9.4-1 .8l-1 5.5c-.1.6.4 1.2 1 1.2s1.1-.6 1-1.2l-1-5.5c-.1-.4-.5-.8-1-.8zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6.7-7c-.6-.4-1.3-.1-1.6.5L15 13c-.2.4-.6.6-1 .6s-.8-.2-1-.6l-1.1-4.5c-.3-.6-1-.9-1.6-.5-.6.4-.8 1.1-.5 1.7l1.1 4.5c.4 1.6 1.9 2.7 3.6 2.7s3.2-1.1 3.6-2.7l1.1-4.5c.3-.6.1-1.3-.5-1.7zm-13.4 0c-.6-.4-1.3-.1-1.6.5L1.6 13c-.2.4-.6.6-1 .6s-.8-.2-1-.6L-.5 8.5c-.3-.6-1-.9-1.6-.5-.6.4-.8 1.1-.5 1.7l1.1 4.5c.4 1.6 1.9 2.7 3.6 2.7s3.2-1.1 3.6-2.7l1.1-4.5c.3-.6.1-1.3-.5-1.7z" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main mb-3 font-poppins">
            Internship Program
          </h1>

          {/* Coming Soon Label */}
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-6 font-poppins">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-muted mb-8 font-poppins leading-relaxed max-w-xl mx-auto">
            We're preparing something amazing. Our internship module will
            connect you with partner companies and verified certificates.
          </p>

          {/* Email Subscription */}
          <form
            onSubmit={handleSubscribe}
            className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 border border-brand-primary/30 dark:border-brand-primary/50 rounded-2xl p-6 mb-8"
          >
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">
              Get Notified
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-2 border-border-main bg-white dark:bg-bg-main text-text-main placeholder-text-muted focus:outline-none focus:border-brand-primary transition-colors font-poppins"
                disabled={isSubscribed}
              />
              <button
                type="submit"
                disabled={isLoading || isSubscribed}
                className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-xl hover:shadow-lg transition-all hover:shadow-brand-primary/40 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                {isSubscribed
                  ? "✓ Subscribed"
                  : isLoading
                    ? "..."
                    : "Notify Me"}
              </button>
            </div>
          </form>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-base sm:text-lg hover:shadow-xl transition-all hover:shadow-brand-primary/40 transform hover:scale-105 active:scale-95"
            >
              Explore Trainings
            </Link>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl border-2 border-brand-primary text-brand-primary font-bold text-base sm:text-lg bg-white dark:bg-bg-card hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
