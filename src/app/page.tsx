import Image from "next/image";

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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">S</span>
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
              {/* SVG arc */}
              <svg className="absolute inset-x-0 bottom-0 w-full h-full" viewBox="0 0 100 40" fill="none">
                <path d="M5,35 C25,5 75,5 95,35" stroke="rgba(0,0,0,0.08)" strokeWidth="0.6" strokeLinecap="round" />
              </svg>
              {/* Icons placed along the arc */}
              <div className="absolute left-[7%] bottom-6 translate-y-1">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-5 h-5 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="absolute left-[28%] bottom-12">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-400 font-bold">F</span>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[88px]">
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-400 font-black text-xl">N</span>
                </div>
              </div>
              <div className="absolute right-[28%] bottom-12">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-400 font-bold text-xs">31</span>
                </div>
              </div>
              <div className="absolute right-[7%] bottom-6 translate-y-1">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-gray-300 rounded" />
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
    </div>
  );
}
