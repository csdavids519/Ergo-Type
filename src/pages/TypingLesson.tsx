import { useState } from "react";
import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import KeyInput from "../components/KeyInputs";
import TextDisplay from "../components/TextDisplay";

function TypingLesson() {
  const { topRow, homeRow, lowerRow } = useKeyboardLayout();

  // position tracking states
  const [cursorPosition, setCursorPosition] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [correctness, setCorrectness] = useState(() =>
    Array(displayText.length).fill("static"),
  );
  console.log("cursorPosition: ", { cursorPosition });
  console.log("correctness: ", { correctness });
  console.log("displayText: ", { displayText });

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        <TextDisplay
          correctness={correctness}
          setCorrectness={setCorrectness}
          displayText={displayText}
          setDisplayText={setDisplayText}
          cursorPosition={cursorPosition}
          setCursorPosition={setCursorPosition}
          topRow={topRow}
          homeRow={homeRow}
          lowerRow={lowerRow}
        />
      </div>
      <KeyInput
        setCorrectness={setCorrectness}
        setCursorPosition={setCursorPosition}
        cursorPosition={cursorPosition}
        displayText={displayText}
      />
    </>
  );
}

export default TypingLesson;
