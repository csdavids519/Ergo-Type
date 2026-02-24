import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const {
    topRow,
    homeRow,
    lowerRow,
    submitted,
    setTopRow,
    setHomeRow,
    setLowerRow,
    setSubmitted,
  } = useKeyboardLayout();
  const navigate = useNavigate();

  // manage form update
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (topRow !== "" && homeRow !== "" && lowerRow !== "") {
      setSubmitted(true);
      navigate("/typing");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="w-full max-w-6xl px-16 flex items-center gap-24">

        {/* Left: Branding */}
        <div className="flex-1">
          <p className="text-xs font-semibold text-blue-400 tracking-[0.3em] uppercase mb-6">
            Keyboard Layout Trainer
          </p>
          <h1 className="text-8xl font-black tracking-tight leading-none bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent mb-6">
            Ergo_<br />Type
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
            Train your fingers on any custom keyboard layout. Enter your key rows and start building muscle memory.
          </p>
          <div className="mt-10 flex gap-8 text-slate-500 text-sm">
            <div>
              <div className="text-2xl font-bold text-slate-200">3</div>
              <div className="uppercase tracking-widest text-xs mt-1">Row Inputs</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-slate-200">Any</div>
              <div className="uppercase tracking-widest text-xs mt-1">Layout</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-slate-200">∞</div>
              <div className="uppercase tracking-widest text-xs mt-1">Practice</div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="w-[420px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-2xl"
          >
            <h2 className="text-slate-200 text-xl font-bold mb-8">
              Configure your layout
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Top Row
                </label>
                <input
                  type="text"
                  className="w-full text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-lg font-mono font-bold placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition"
                  value={topRow}
                  placeholder="e.g. QWERT YUIOP"
                  onChange={(e) => setTopRow(e.target.value.toUpperCase())}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Home Row
                </label>
                <input
                  type="text"
                  className="w-full text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-lg font-mono font-bold placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition"
                  value={homeRow}
                  placeholder="e.g. ASDF GHJKL"
                  onChange={(e) => setHomeRow(e.target.value.toUpperCase())}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Lower Row
                </label>
                <input
                  type="text"
                  className="w-full text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-lg font-mono font-bold placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition"
                  value={lowerRow}
                  placeholder="e.g. ZXCV BNM"
                  onChange={(e) => setLowerRow(e.target.value.toUpperCase())}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-widest uppercase hover:from-blue-500 hover:to-cyan-400 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-900/40"
            >
              Start Typing
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
