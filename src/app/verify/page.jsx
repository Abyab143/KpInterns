"use client";

import React, { useState } from "react";

export default function VerifyPage() {
  const [inputValue, setInputValue] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle verification
  const handleVerify = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("Please enter a Certificate ID, Email, or Phone Number");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setVerificationResult({
        success: true,
        certificateId: "PKJ-2024-001234",
        holder: "John Doe",
        course: "Full Stack Web Development",
        issuedDate: "March 15, 2024",
        expiryDate: "March 15, 2025",
      });
      setIsLoading(false);
    }, 1500);
  };

  const trustFeatures = [
    {
      icon: "🔒",
      title: "Secure Verification",
      description:
        "Industry-standard SSL encryption and security protocols to protect your data and ensure authenticity.",
    },
    {
      icon: "✅",
      title: "Instant Results",
      description:
        "Get immediate verification results for certificates issued by PKJ Interns with real-time database checks.",
    },
    {
      icon: "🌐",
      title: "Globally Recognized",
      description:
        "Our certificates are recognized internationally and verified by employers worldwide.",
    },
    {
      icon: "📋",
      title: "Official Records",
      description:
        "All verification data is maintained in our secure database with complete audit trails.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Enter Your Information",
      description:
        "Provide your Certificate ID, registered email, or phone number in the verification form above.",
    },
    {
      step: "02",
      title: "System Verification",
      description:
        "Our system instantly cross-references your information with our secure certificate database.",
    },
    {
      step: "03",
      title: "View Details",
      description:
        "Get complete certificate details including course name, completion date, and holder information.",
    },
    {
      step: "04",
      title: "Share Credentials",
      description:
        "Easily share your verified certificate link with employers, clients, or educational institutions.",
    },
  ];

  const faqs = [
    {
      question: "What information do I need to verify my certificate?",
      answer:
        "You can verify using any of the following: your Certificate ID, registered email address, or phone number associated with your account.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Verification is instant! Results are displayed immediately after you submit your information.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we use industry-standard SSL encryption and secure databases to protect all personal and certificate information.",
    },
    {
      question: "Can I verify someone else's certificate?",
      answer:
        "Yes, employers and institutions can verify certificates using the publicly available Certificate ID.",
    },
    {
      question: "What if my certificate has expired?",
      answer:
        "Expired certificates can still be verified, but will be clearly marked as expired. You can renew your certificate by contacting our support team.",
    },
    {
      question: "How long are certificates valid?",
      answer:
        "Most PKJ Interns certificates are valid for one year from the date of issue. Validity period is mentioned in your certificate.",
    },
  ];

  return (
    <div className="min-h-screen  bg-bg-main">
      {/* Hero Section */}
      <section className="py-16  bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
        <div className=" mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="bg-brand-primary/20 p-4 rounded-2xl">
              <svg
                className="w-12 h-12 text-brand-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-main mb-6">
            Certificate <span className="text-brand-primary">Verification</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Verify the authenticity of PKJ Interns certificates instantly. Enter
            your Certificate ID, email, or phone number to get complete
            verification details.
          </p>
        </div>
      </section>

      {/* Main Verification Section */}
      <div className=" mx-auto px-4 sm:px-8 lg:px-[96px] py-20">
        {/* Verification Form */}
        <div className="mb-20">
          <div className="bg-bg-card border border-border-main rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-text-main mb-8 text-center">
              Verify Your Certificate
            </h2>

            <form onSubmit={handleVerify} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Certificate ID / Email / Phone Number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border border-border-main bg-bg-main text-text-main placeholder-text-muted/60 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Verify Now
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Verification Result */}
            {verificationResult && (
              <div className="mt-12 p-8 bg-gradient-to-br from-brand-success/10 to-brand-success/5 rounded-2xl border border-brand-success/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-success/20 p-3 rounded-full">
                    <svg
                      className="w-8 h-8 text-brand-success"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-success">
                    Certificate Verified
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                      Certificate ID
                    </p>
                    <p className="text-lg font-bold text-text-main">
                      {verificationResult.certificateId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                      Holder Name
                    </p>
                    <p className="text-lg font-bold text-text-main">
                      {verificationResult.holder}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                      Course
                    </p>
                    <p className="text-lg font-bold text-text-main">
                      {verificationResult.course}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                      Issued Date
                    </p>
                    <p className="text-lg font-bold text-text-main">
                      {verificationResult.issuedDate}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                      Expiry Date
                    </p>
                    <p className="text-lg font-bold text-brand-success">
                      {verificationResult.expiryDate}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-brand-primary text-white font-semibold py-3 rounded-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Certificate
                  </button>
                  <button className="flex-1 bg-brand-secondary/20 text-brand-secondary font-semibold py-3 rounded-lg hover:bg-brand-secondary/30 transition-all flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.684 13.342C9.589 12.71 10 11.715 10 10.5c0-2.121-1.879-4-4-4s-4 1.879-4 4 1.879 4 4 4c.464 0 .909-.087 1.316-.25m0 0a6 6 0 016 6v2m0 0a6 6 0 01-6-6m6 6v2m0 0a6 6 0 01-6-6m6 6l-1-1m-8-6a4 4 0 014-4h4a4 4 0 014 4"
                      />
                    </svg>
                    Share Certificate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-text-main mb-12 text-center">
            Why Verify With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border-main rounded-2xl p-8 hover:shadow-lg transition-all hover:border-brand-primary/50"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-text-main mb-12 text-center">
            How Verification Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-bg-card border border-border-main rounded-2xl p-8">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-xl w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Security & Trust Badges */}
        <section className="mb-20 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-12 border border-brand-primary/10">
          <h2 className="text-3xl font-bold text-text-main mb-8 text-center">
            Trust & Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">SSL Encrypted</h3>
              <p className="text-sm text-text-muted">
                Industry-standard security for all transactions
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brand-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999a11.954 11.954 0 010 10.002 8 8 0 1015.668 0c.11-.202.223-.404.332-.602a11.955 11.955 0 01-15.668-9.4"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">ISO Certified</h3>
              <p className="text-sm text-text-muted">
                Meets international quality standards
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brand-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.372a3.066 3.066 0 01-2.812 3.062p-7.44 0a3.066 3.066 0 01-2.812-3.062V6.517a3.066 3.066 0 012.812-3.062zM9 11a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-text-main mb-2">Verified Data</h3>
              <p className="text-sm text-text-muted">
                All certificates are verified and authentic
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-4xl font-extrabold text-text-main mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-bg-card border border-border-main rounded-xl p-6 cursor-pointer hover:border-brand-primary/50 transition-all group"
              >
                <summary className="flex items-center justify-between font-bold text-text-main">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-brand-primary transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <p className="text-text-muted mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary/90 to-brand-secondary/90 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Don't Have a Certificate Yet?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore our comprehensive courses and internship programs to earn
            industry-recognized certificates from PKJ Interns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              View Internships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
