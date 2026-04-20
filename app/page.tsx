import Image from "next/image";

const DOWNLOAD_URL = process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#";

const steps = [
  {
    num: "1",
    emoji: "📦",
    title: "Download the file",
    desc: (
      <>
        Click the big pink button above. A <code className="bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded font-mono text-sm">.zip</code> file (~114 MB) will save to your Downloads folder.
      </>
    ),
  },
  {
    num: "2",
    emoji: "🥃",
    title: "Install Whisky (free, one time)",
    desc: (
      <>
        Unzip the file, open the folder and open{" "}
        <code className="bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded font-mono text-sm">00 HOW TO OPEN.html</code>{" "}
        — it has a button to get Whisky. Download Whisky and drag it into your{" "}
        <strong>Applications</strong> folder.
      </>
    ),
  },
  {
    num: "3",
    emoji: "🎮",
    title: "Right-click the app → Open",
    desc: (
      <>
        Find <code className="bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded font-mono text-sm">Marshmellow Day Spa.app</code>,{" "}
        <strong>right-click it → Open → Open</strong>. Mac asks this once for safety, never again.
        After that, just double-click to play anytime! 🎉
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 text-center">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #ffb3d1 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #ffd6e7 0%, transparent 70%)" }} />
        </div>

        {/* Floating marshmallow emojis */}
        <span className="float-1 absolute top-16 left-[8%] text-5xl select-none hidden md:block">🍡</span>
        <span className="float-2 absolute top-24 right-[10%] text-4xl select-none hidden md:block">☕</span>
        <span className="float-1 absolute bottom-16 left-[15%] text-3xl select-none hidden md:block">🫧</span>
        <span className="float-2 absolute bottom-20 right-[12%] text-3xl select-none hidden md:block">✨</span>

        <div className="relative mx-auto max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{ background: "#fff0f6", color: "#c0306a", border: "1px solid #ffb3d1" }}>
            🍥 Free game · Apple Silicon Mac (M1 / M2 / M3 / M4)
          </div>

          {/* Game image */}
          <div className="mx-auto mb-8 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 24px 64px rgba(255,107,157,0.25)" }}>
            <Image
              src="https://img.itch.zone/aW1nLzE3NjIwNjYucG5n/original/W0Nl87.png"
              alt="Marshmellow Day Spa game screenshot"
              width={900}
              height={400}
              className="w-full object-cover"
              priority
              unoptimized
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
            style={{ color: "var(--brown)" }}>
            Marshmellow<br />
            <span style={{ color: "var(--pink)" }}>Day Spa</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "#6b4a3a" }}>
            Run a cozy hot-cocoa spa for marshmallows! This free Windows game now plays beautifully on Mac — just download and follow 3 easy steps.
          </p>

          {/* CTA */}
          <a
            href={DOWNLOAD_URL}
            className="pulse-btn inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #ff6b9d 0%, #ff4081 100%)" }}
          >
            <span className="text-2xl">⬇️</span>
            Download for Mac
            <span className="text-sm font-normal opacity-80 ml-1">· 114 MB</span>
          </a>

          <p className="mt-4 text-sm" style={{ color: "#b08070" }}>
            Works on M1, M2, M3, M4 Macs · macOS Sonoma 14+
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-3" style={{ color: "var(--brown)" }}>
            How to play
          </h2>
          <p className="text-center mb-12" style={{ color: "#b08070" }}>
            3 steps. Takes about 2 minutes.
          </p>

          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.num} className="step-card flex items-start gap-6 p-6 md:p-8">
                {/* Number bubble */}
                <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black"
                  style={{ background: "linear-gradient(135deg, #ff6b9d, #ff4081)" }}>
                  {s.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{s.emoji}</span>
                    <h3 className="text-xl font-bold" style={{ color: "var(--brown)" }}>{s.title}</h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: "#6b4a3a", fontSize: "15px" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* After steps CTA */}
          <div className="mt-12 text-center">
            <a
              href={DOWNLOAD_URL}
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #ff6b9d 0%, #ff4081 100%)" }}
            >
              <span>⬇️</span> Download now · it&apos;s free
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-10" style={{ color: "var(--brown)" }}>
            Quick answers
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { q: "Is this free?", a: "Yes! The game is free on itch.io. Whisky is also free and open source." },
              { q: "Does it work on my Mac?", a: "It works on Apple Silicon Macs — M1, M2, M3, and M4 chips. macOS Sonoma or newer." },
              { q: "What is Whisky?", a: "Whisky is a free app that lets you run Windows games on Mac using Wine under the hood." },
              { q: "Do I need anything else?", a: "Nope. Just Whisky (one-time install) and the file you download here. That's it." },
            ].map(({ q, a }) => (
              <div key={q} className="step-card p-6">
                <h3 className="font-bold mb-2 text-base" style={{ color: "var(--brown)" }}>{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b4a3a" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-center pb-12 px-6" style={{ color: "#b08070", fontSize: "13px" }}>
        <p>
          Game by{" "}
          <a href="https://lesser-panda.itch.io/marshmellow-day-spa" target="_blank" rel="noopener noreferrer"
            className="underline hover:text-pink-500">
            Lesser Panda
          </a>{" "}
          · Made for Winter Jam 2019 · Mac packaging by{" "}
          <a href="https://craftbydan.com" target="_blank" rel="noopener noreferrer"
            className="underline hover:text-pink-500">
            craftbydan.com
          </a>
        </p>
      </footer>
    </main>
  );
}
