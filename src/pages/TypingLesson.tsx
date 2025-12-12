import { useState } from "react";
import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import KeyInput from "../components/KeyInputs";
import TextDisplay from "../components/TextDisplay";

function TypingLesson() {
  const { topRow, homeRow, lowerRow } = useKeyboardLayout();

  // position tracking states
  const [cursorPosition, setCursorPosition] = useState(0);
  const [lettersArray, setLettersArray] = useState<string[][]>([]);
  const [correctness, setCorrectness] = useState(() =>
    Array(lettersArray.length).fill("static")
  );

  // track user learning level
  const [userLevel, setUserLevel] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        <TextDisplay
          correctness={correctness}
          lettersArray={lettersArray}
          setLettersArray={setLettersArray}
          cursorPosition={cursorPosition}
          userLevel={userLevel}
          topRow={topRow}
          homeRow={homeRow}
          lowerRow={lowerRow}
        />
      </div>
      <KeyInput
        setCorrectness={setCorrectness}
        setCursorPosition={setCursorPosition}
        cursorPosition={cursorPosition}
        lettersArray={lettersArray}
      />
    </>
  );
}

export default TypingLesson;
