import { useState } from "react";
import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import KeyInput from "../components/KeyInputs";
// import TextDisplay from "../components/TextDisplay";
import UserTest_0 from "../components/UserTest_0";
import UserTest_1 from "../components/UserTest_1";
import UserTest_2 from "../components/UserTest_2";
import UserTest_3 from "../components/UserTest_3";
import UserTest_4 from "../components/UserTest_4";
import UserTest_5 from "../components/UserTest_5";

export default function TypingLesson() {
  const { topRow, homeRow, lowerRow } = useKeyboardLayout();

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

  // Render appropriate test based on level
  let renderTest;
  const userMessage = `Level ${userLevel}`;
  let userScoreMessage = Math.round((userScore / displayText.length) * 100);
  const displayLength = displayText.length;
  console.log("userScore: ", { userScore });
  console.log("displayLength: ", { displayLength });
  console.log("score %: ", userScore / displayText.length);
  if (userLevel === 0) {
    renderTest = (
      <UserTest_0
        topRow={topRow}
        homeRow={homeRow}
        lowerRow={lowerRow}
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  } else if (userLevel === 1) {
    renderTest = (
      <UserTest_1
        topRow={topRow}
        homeRow={homeRow}
        lowerRow={lowerRow}
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  } else if (userLevel === 2) {
    renderTest = (
      <UserTest_2
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  } else if (userLevel === 3) {
    renderTest = (
      <UserTest_3
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  } else if (userLevel === 4) {
    renderTest = (
      <UserTest_4
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  } else if (userLevel === 5) {
    renderTest = (
      <UserTest_5
        correctness={correctness}
        setCorrectness={setCorrectness}
        displayText={displayText}
        setDisplayText={setDisplayText}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        setUserScore={setUserScore}
      />
    );
  }

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
