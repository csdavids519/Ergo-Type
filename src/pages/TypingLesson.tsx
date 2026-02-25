import { useState } from "react";
import KeyInput from "../components/KeyInputs";
import UserTest from "../components/UserTest";
import { LEVEL_CONFIGS } from "../config/levelConfigs";

export default function TypingLesson() {
  // position tracking states
  const [cursorPosition, setCursorPosition] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [userScore, setUserScore] = useState(0);
  const [correctness, setCorrectness] = useState(() =>
    Array(displayText.length).fill("static"),
  );
  console.log("cursorPosition: ", { cursorPosition });
  console.log("correctness: ", { correctness });
  console.log("displayText: ", { displayText });
  const [userLevel, setUserLevel] = useState(0);

  const userMessage = `Level ${userLevel}`;
  let userScoreMessage = Math.round((userScore / displayText.length) * 100);
  const displayLength = displayText.length;
  console.log("userScore: ", { userScore });
  console.log("displayLength: ", { displayLength });
  console.log("score %: ", userScore / displayText.length);

  // When all levels are complete, show completion screen
  if (userLevel >= LEVEL_CONFIGS.length) {
    return (
      <div className="min-h-screen w-full bg-[#0a0a0f] flex flex-col items-center justify-center gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">All levels complete</p>
        <h2 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          You finished!
        </h2>
        <button
          onClick={() => {
            setUserLevel(0);
            setUserScore(0);
            setCursorPosition(0);
            setCorrectness(["static"]);
            setDisplayText([]);
          }}
          className="px-6 py-2 text-sm font-mono bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          Start again
        </button>
      </div>
    );
  }

  const renderTest = (
    <UserTest
      key={userLevel}
      config={LEVEL_CONFIGS[userLevel]}
      levelIndex={userLevel}
      correctness={correctness}
      setCorrectness={setCorrectness}
      displayText={displayText}
      setDisplayText={setDisplayText}
      cursorPosition={cursorPosition}
      setCursorPosition={setCursorPosition}
      setUserLevel={setUserLevel}
      setUserScore={setUserScore}
    />
  );

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] flex flex-col">

      {/* Navbar */}
      <header className="flex items-center justify-between px-12 py-5 border-b border-white/10">
        <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Ergo_Type
        </span>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-0.5">Level</div>
            <div className="text-slate-100 font-bold text-lg leading-none">{userLevel}</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-0.5">Score</div>
            <div className="text-slate-100 font-bold text-lg leading-none">
              {displayText.length > 0 ? `${userScoreMessage}%` : "—"}
            </div>
          </div>
        </div>
      </header>

      {/* Typing stage */}
      <main className="flex-1 flex flex-col items-center justify-center gap-10">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {userMessage}
        </p>
        <div className="flex flex-wrap items-center justify-center px-16">
          {renderTest}
        </div>
      </main>

      <KeyInput
        setCorrectness={setCorrectness}
        setCursorPosition={setCursorPosition}
        setUserScore={setUserScore}
        cursorPosition={cursorPosition}
        displayText={displayText}
      />

      {/* DEV ONLY: jump to any level */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 border border-white/10 rounded-lg px-4 py-2">
        <span className="text-xs font-mono text-slate-500 mr-1">DEV</span>
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => {
              setUserLevel(n);
              setCursorPosition(0);
              setCorrectness(["static"]);
              setUserScore(0);
              setDisplayText([]);
            }}
            className={`px-3 py-1 text-xs font-mono rounded transition ${
              userLevel === n
                ? "bg-blue-600 text-white"
                : "bg-white/10 text-slate-400 hover:bg-white/20"
            }`}
          >
            L{n}
          </button>
        ))}
      </div>
    </div>
  );
}
