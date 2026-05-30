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
    <div className="min-h-screen bg-gradient-to-br from-bg-main  to-bg-card  flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white dark:bg-bg-card rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-border-main backdrop-blur-sm text-center animate-fade-in">
          
          {/* Icon Section */}
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main mb-3 font-poppins">
            Courses & Programs
          </h1>

          {/* Coming Soon Label */}
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-6 font-poppins">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-muted mb-8 font-poppins leading-relaxed max-w-xl mx-auto">
            We're preparing something amazing. Our internship module will connect you with partner companies and verified certificates.
          </p>

          {/* Email Subscription */}
          <form onSubmit={handleSubscribe} className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-brand-primary/20 dark:to-brand-secondary/20 border border-brand-primary/30 dark:border-brand-primary/50 rounded-2xl p-6 mb-8">
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Get Notified</p>
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
                {isSubscribed ? "✓ Subscribed" : isLoading ? "..." : "Notify Me"}
              </button>
            </div>
          </form>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-base sm:text-lg hover:shadow-xl transition-all hover:shadow-brand-primary/40 transform hover:scale-105 active:scale-95"
            >
              Explore Another
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
