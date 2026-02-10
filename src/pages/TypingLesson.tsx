import { useState } from "react";
import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import KeyInput from "../components/KeyInputs";
// import TextDisplay from "../components/TextDisplay";
import UserTest_0 from "../components/UserTest_0";
import UserTest_1 from "../components/UserTest_1";
import UserTest_2 from "../components/UserTest_2";
import UserTest_3 from "../components/UserTest_3";

export default function TypingLesson() {
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
  const [userLevel, setUserLevel] = useState(0);

  // Render appropriate test based on level
  let renderTest;
  const userMessage = `Level ${userLevel}`;

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
      />
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Ergo-Type.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        <>
          <p>{userMessage}</p>
          {renderTest}
        </>
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
