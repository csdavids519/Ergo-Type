// Manages the display of tests and advancement of user level

import UserTest_0 from "./UserTest_0";
import UserTest_1 from "./UserTest_1";

console.log("TextDisplay component loaded");
interface TextDisplayProps {
  correctness: string[];
  lettersArray: string[][];
  setLettersArray: React.Dispatch<React.SetStateAction<string[][]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  userLevel: number;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
  topRow: string;
  homeRow: string;
  lowerRow: string;
}

export default function TextDisplay({
  correctness,
  lettersArray,
  setLettersArray,
  cursorPosition,
  setCursorPosition,
  userLevel,
  setUserLevel,
  topRow,
  homeRow,
  lowerRow,
}: TextDisplayProps) {
  const testLength = 5;
  const userMessage = `Level ${userLevel}`;

  // Render appropriate test based on level
  let renderTest;

  if (userLevel === 0) {
    renderTest = (
      <UserTest_0
        homeRow={homeRow}
        correctness={correctness}
        lettersArray={lettersArray}
        setLettersArray={setLettersArray}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        testLength={testLength}
      />
    );
  } else if (userLevel === 1) {
    renderTest = (
      <UserTest_1
        topRow={topRow}
        homeRow={homeRow}
        lowerRow={lowerRow}
        correctness={correctness}
        lettersArray={lettersArray}
        setLettersArray={setLettersArray}
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        testLength={testLength}
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
