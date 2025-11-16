"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<"signin" | "signup">(
    (tabParam === "signup" ? "signup" : "signin")
  );

  useEffect(() => {
    if (tabParam === "signup") {
      setActiveTab("signup");
    } else if (tabParam === "signin") {
      setActiveTab("signin");
    }
  }, [tabParam]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpTerms, setSignUpTerms] = useState(false);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInEmail,
        password: signInPassword,
      });

      if (error) throw error;

      if (data.user) {
        setSuccess("Successfully signed in! Redirecting...");
        router.push("/");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!signUpTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signUpEmail,
        password: signUpPassword,
        options: {
          data: {
            full_name: signUpName,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        setSuccess("Account created! Please check your email to verify your account.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(180deg,#fbf9ff_0%,#faf6ff_28%,#f6f8ff_62%,#f7fbff_100%)]">
      {/* Layered background effects - same as home page */}
      {/* Broad conic beam */}
      <div className="pointer-events-none absolute -inset-x-16 -top-40 h-[65rem] rotate-6 opacity-60 blur-2xl"
        style={{ backgroundImage: `conic-gradient(from 210deg at 50% 30%, #efe5ff 0deg, #fde7f4 120deg, #e6ebff 260deg, transparent 320deg)` }} />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[16rem] h-[34rem] w-[70rem] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0.35) 55%, transparent 70%)" }} />

      {/* Mirrored diagonal bands: left slants ↘, right slants ↙ */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2">
        <div className="absolute inset-0 opacity-80 mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(32deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 1.5px, transparent 44px)`,
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 76%, transparent 100%), linear-gradient(to bottom, transparent 8%, black 22%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 76%, transparent 100%), linear-gradient(to bottom, transparent 8%, black 22%, black 88%, transparent 100%)"
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2">
        <div className="absolute inset-0 opacity-80 mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(-32deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1.5px, transparent 1.5px, transparent 44px)`,
            WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 14%, black 76%, transparent 100%), linear-gradient(to bottom, transparent 8%, black 22%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to left, transparent 0%, black 14%, black 76%, transparent 100%), linear-gradient(to bottom, transparent 8%, black 22%, black 88%, transparent 100%)"
          }}
        />
      </div>

      {/* Stronger soft bands: layered gradient strips */}
      <div className="pointer-events-none absolute inset-0 -rotate-[6deg] -skew-x-[4deg]">
        <div className="absolute top-[-10%] bottom-[-10%] left-[8%] w-[10%] blur-xl opacity-40"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0))" }} />
        <div className="absolute top-[-10%] bottom-[-10%] left-[26%] w-[9%] blur-xl opacity-35"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0))" }} />
        <div className="absolute top-[-10%] bottom-[-10%] left-[45%] w-[8%] blur-xl opacity-35"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0))" }} />
        <div className="absolute top-[-10%] bottom-[-10%] left-[62%] w-[9%] blur-xl opacity-35"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0))" }} />
        <div className="absolute top-[-10%] bottom-[-10%] left-[80%] w-[10%] blur-xl opacity-40"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0))" }} />
      </div>

      {/* Center-to-sides color radiation (pink left, blue right) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2"
          style={{
            background: "linear-gradient(to left, rgba(253,231,244,0.45), transparent 60%)",
            WebkitMaskImage: "radial-gradient(80% 70% at 50% 50%, black 0%, transparent 75%)",
            maskImage: "radial-gradient(80% 70% at 50% 50%, black 0%, transparent 75%)"
          }} />
        <div className="absolute inset-y-0 right-0 w-1/2"
          style={{
            background: "linear-gradient(to right, rgba(230,235,255,0.5), transparent 60%)",
            WebkitMaskImage: "radial-gradient(80% 70% at 50% 50%, black 0%, transparent 75%)",
            maskImage: "radial-gradient(80% 70% at 50% 50%, black 0%, transparent 75%)"
          }} />
      </div>

      {/* Top and bottom white radiance */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.95), transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95), transparent)" }} />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage: "radial-gradient(120%_80% at 50% 30%, black 60%, transparent 100%)",
          maskImage: "radial-gradient(120%_80% at 50% 30%, black 60%, transparent 100%)",
          boxShadow: "inset 0 -120px 140px rgba(255,255,255,0.9)"
        }}
      />

      {/* Subtle film grain to add texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')"
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-6 py-5 sm:px-10 lg:px-14">
        <nav className="mx-auto max-w-7xl flex items-center justify-between rounded-2xl bg-white/40 backdrop-blur supports-[backdrop-filter]:bg-white/50 border border-white/60 px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/glyptodon_logo.png" alt="Ruberic" width={40} height={40} />
            </div>
            <span className="text-2xl font-bold text-gray-800">Ruberic</span>
          </Link>
        </nav>
      </header>

      {/* Auth Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6 py-12 sm:px-8 lg:px-12">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/80 border border-white/60 shadow-xl p-8 sm:p-10">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 bg-gray-100/50 rounded-xl p-1">
              <button
                onClick={() => setActiveTab("signin")}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "signin"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "signup"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign up
              </button>
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              {/* Error/Success Messages */}
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
              {success && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                  <p className="text-sm text-green-800">{success}</p>
                </div>
              )}

              {activeTab === "signin" ? (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
                    <p className="text-gray-600 text-sm">Sign in to your account to continue</p>
                  </div>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="signin-email"
                        name="email"
                        required
                        value={signInEmail}
                        onChange={(e) => setSignInEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        id="signin-password"
                        name="password"
                        required
                        value={signInPassword}
                        onChange={(e) => setSignInPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors shadow-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </form>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white/70 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  <button
                    onClick={handleGoogleAuth}
                    disabled={loading}
                    className="w-full px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
                    <p className="text-gray-600 text-sm">Get started with Ruberic today</p>
                  </div>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                      <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="signup-name"
                        name="name"
                        required
                        value={signUpName}
                        onChange={(e) => setSignUpName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="signup-email"
                        name="email"
                        required
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        id="signup-password"
                        name="password"
                        required
                        minLength={8}
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="••••••••"
                      />
                      <p className="mt-1.5 text-xs text-gray-500">Must be at least 8 characters</p>
                    </div>
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          checked={signUpTerms}
                          onChange={(e) => setSignUpTerms(e.target.checked)}
                          className="mt-0.5 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          I agree to the{" "}
                          <a href="#" className="text-gray-900 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-gray-900 hover:underline">
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors shadow-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Creating account..." : "Create account"}
                    </button>
                  </form>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white/70 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  <button
                    onClick={handleGoogleAuth}
                    disabled={loading}
                    className="w-full px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign up with Google
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {activeTab === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveTab("signup")}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("signin")}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
