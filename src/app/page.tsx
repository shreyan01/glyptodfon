"use client";

import Image from "next/image";
import { FaGithub, FaSlack, FaFigma } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(180deg,#fbf9ff_0%,#faf6ff_28%,#f6f8ff_62%,#f7fbff_100%)]">
      {/* Layered background effects to match the screenshot */}
      {/* Broad conic beam */}
      <div className="pointer-events-none absolute -inset-x-16 -top-40 h-[65rem] rotate-6 opacity-60 blur-2xl"
        style={{ backgroundImage: `conic-gradient(from 210deg at 50% 30%, #efe5ff 0deg, #fde7f4 120deg, #e6ebff 260deg, transparent 320deg)` }} />

      {/* Radial glow behind headline */}
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
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/glyptodon_logo.png" alt="Ruberic" width={40} height={40} />
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/glyptodon_logo.png" alt="Ruberic" width={40} height={40} />
            </div>
            <span className="text-2xl font-bold text-gray-800">Ruberic</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-9 text-[15px]">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Templates</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Security</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-black transition-colors shadow-sm">
              Sign up
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-10 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-[38px] sm:text-6xl lg:text-[84px] font-extrabold tracking-tight text-gray-900 leading-[0.95] mb-7">
            The Free Product OS
            <br className="hidden sm:block" />
            That Ships With You
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Plan, track, and ship in one lightning‑fast workspace. Ruberic unifies issues, docs, sprints, and roadmaps with assistive AI. Free forever for teams. Usage analytics help improve our models — fully optional and privacy‑controlled.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <button className="px-7 py-3.5 bg-gray-900 text-white text-base sm:text-lg font-medium rounded-full hover:bg-black transition-colors w-full sm:w-auto shadow-sm">
              Create workspace
            </button>
            <button className="px-7 py-3.5 bg-white text-gray-900 text-base sm:text-lg font-medium border border-gray-300 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Watch demo
            </button>
          </div>

          {/* Integrations Section */}
          <div className="flex flex-col items-center">
            {/* Arc container */}
            <div className="relative w-full max-w-3xl h-36 mb-2">
              
              
              <div className="absolute left-[28%] bottom-12">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <FaFigma className="text-gray-600 text-2xl" />
                  <FaFigma className="text-gray-600 text-2xl" />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[88px]">
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <FaGithub className="text-gray-600 text-2xl" />
                </div>
              </div>
              <div className="absolute right-[28%] bottom-12">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <FaSlack className="text-gray-600 text-2xl" />
                  <FaSlack className="text-gray-600 text-2xl" />
                </div>
              </div>
            </div>

            {/* Integration Text */}
            <p className="text-gray-500 text-sm sm:text-base">
              Works with the tools your team already uses
            </p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-24 sm:px-8 lg:px-12">
        {/* Section background echoing hero */}
        <FeaturesScrollReveal />
      </section>
      
      {/* Disclaimer Section */}
      <section className="relative z-10 px-6 pt-10 pb-24 sm:px-8 lg:px-12">
        <DisclaimerSection />
      </section>
    </div>
  );
}

function FeaturesScrollReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1 across the whole section
  const [overlayVisible, setOverlayVisible] = useState(false);

  const features = useMemo(
    () => [
      {
        id: "simplest-ui",
        type: "hero",
        title: "Simplest UI for a project management tool ever seen",
        description:
          "A distraction‑free interface that keeps your team focused on shipping.",
      },
      {
        id: "necessary-tools",
        type: "text",
        title: "All necessary tools pre-integrated for your team to ship at blazing speed",
        description:
          "No more juggling between tools. Ruberic integrates with your team's favorite tools and workflows.",
      },
      {
        id: "one-workspace",
        type: "text",
        title: "Docs, tickets, issues, roadmaps — all in one place",
        description:
          "Everything your product team needs, wired together and blazing fast.",
      },
      {
        id: "low-manual",
        type: "text",
        title: "We have removed as much manual work as possible for your team",
        description:
          "No more manual work. Ruberic is a fully automated system that works for your team.",
      },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Show overlay only when section top has reached top of viewport
      // and the section still covers at least the viewport height
      const pinnedWindow = rect.top <= 0 && rect.bottom >= window.innerHeight;
      setOverlayVisible(pinnedWindow);
      const totalScrollable = rect.height - window.innerHeight;
      // how far we have scrolled inside the section
      const insideScroll = Math.min(Math.max(-rect.top, 0), Math.max(totalScrollable, 1));
      const progress = Math.max(0, Math.min(1, insideScroll / Math.max(totalScrollable, 1)));
      setScrollProgress(progress);

      // Map progress to discrete steps: one-by-one reveal
      const steps = Math.max(features.length, 1);
      const index = Math.min(steps - 1, Math.floor(progress * steps + 0.00001));
      setActiveIndex(index);
    };

    // Defer first measurement until after paint to ensure layout/refs are ready
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // compute a gentle parallax translate for active card based on section scroll progress
  const parallaxTranslateY = (index: number) => {
    const base = (scrollProgress * features.length) - index;
    // clamp to a small range
    const delta = Math.max(-1, Math.min(1, base));
    return delta * 12; // px
  };

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl" style={{ height: `${features.length * 100}vh` }}>
      {/* Fixed overlay to ensure pinning regardless of ancestor overflow */}
      <div className="fixed inset-0 pointer-events-none" style={{ opacity: overlayVisible ? 1 : 0, transition: "opacity 200ms" }}>
        <div className="h-full flex flex-col px-6 sm:px-8 lg:px-12 justify-center pointer-events-none">
          <div className="z-0 mb-6 mt-6 text-xs font-medium tracking-wide text-gray-500 pointer-events-none">
            FEATURES
          </div>
          <div className="relative flex-1 flex flex-col justify-center pointer-events-none">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                className={
                  "absolute inset-x-0 transition-opacity duration-700 will-change-opacity " +
                  (activeIndex === index ? "opacity-100" : "opacity-0")
                }
                style={{ pointerEvents: activeIndex === index ? "auto" : "none" }}
              >
                {feature.type === "hero" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.03] text-gray-900">
                        {feature.title}
                      </h2>
                      <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-md">
                        {feature.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <TiltCard translateY={parallaxTranslateY(index)} />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                      <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-md">
                        {feature.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="rounded-2xl border border-gray-200 bg-white/70 p-6">
                        <div className="aspect-[16/10] w-full rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Coming soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DisclaimerSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.03] text-gray-900">
            Disclaimer
          </h2>
          <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-md">
            Ruberic is free because we are building an AI models suite specifically crafted
            for project management tools — a new generation that will transform how teams plan
            and ship.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6">
            <div className="space-y-3 text-gray-600 text-sm sm:text-base">
              <p>
                We intend to use our users' data to train and continually improve those models.
              </p>
              <p>
                We solemnly promise to protect your data and prevent it from being sold outside.
                Your data will be used solely to train and improve our models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TiltCard({ translateY = 0 }: { translateY?: number }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: -6, y: 6 });

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      // map to small tilt range
      const rotateY = (px - 0.5) * 12; // left/right
      const rotateX = (0.5 - py) * 12; // up/down
      setTilt({ x: rotateX, y: rotateY });
    };

    const onLeave = () => setTilt({ x: 6, y: -6 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative rounded-2xl bg-white border border-gray-200 shadow-xl"
      style={{ perspective: "1200px", transform: `translateY(${translateY}px)` }}
    >
      <div
        className="rounded-2xl p-4 sm:p-6 transition-transform duration-200"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          background: "linear-gradient(180deg, rgba(248,249,255,0.9), rgba(255,255,255,0.9))",
          boxShadow: "0 20px 40px rgba(20,20,40,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="text-xs text-gray-500">Dashboard</div>
        </div>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Product dashboard preview</div>
        </div>
      </div>
    </div>
  );
}
