// Manages the display of tests and advancement of user level
import { useState } from "react";
import UserTest_0 from "./UserTest_0";
import UserTest_1 from "./UserTest_1";
import UserTest_2 from "./UserTest_2";
import UserTest_3 from "./UserTest_3";

console.log("TextDisplay component loaded");
interface TextDisplayProps {
  correctness: string[];
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  displayText: string[];
  setDisplayText: React.Dispatch<React.SetStateAction<string[]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  topRow: string;
  homeRow: string;
  lowerRow: string;
}

export default function TextDisplay({
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  topRow,
  homeRow,
  lowerRow,
}: TextDisplayProps) {
  const [userLevel, setUserLevel] = useState(2);
  console.log("userLevel: ", { userLevel });
  const userMessage = `Level ${userLevel}`;

  // Render appropriate test based on level
  let renderTest;

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
      <p>{userMessage}</p>
      {renderTest}
    </>
  );
}
