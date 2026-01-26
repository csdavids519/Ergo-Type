// UserTest_0.tsx
// Test: Practice each letter from home row individually
// Goal: Learn home row letter positions

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

interface UserTest_0Props {
  homeRow: string;
  correctness: string[];
  lettersArray: string[][];
  setLettersArray: React.Dispatch<React.SetStateAction<string[][]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  userLevel: number;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
  testLength: number;
}

export default function UserTest_0({
  homeRow,
  correctness,
  lettersArray,
  setLettersArray,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  testLength,
}: UserTest_0Props) {
  const [activeLetters, setActiveLetters] = useState<string[]>([]);
  const [letterPosition, setLetterPosition] = useState(0);

  // Initialize home row letters
  useEffect(() => {
    const letters = homeRow.split("");
    setActiveLetters(letters);

    // Initialize with first letter
    if (letters.length > 0) {
      setLettersArray(Array(testLength).fill([letters[0]]));
    }
  }, [homeRow, setLettersArray, testLength]);

  // Handle progression through home row letters
  useEffect(() => {
    if (!activeLetters.length) return;

    // When cursor reaches the end of current letter practice
    if (cursorPosition === testLength && cursorPosition > 0) {
      const nextPosition = letterPosition + 1;

      if (nextPosition < activeLetters.length) {
        // Move to next letter
        setLetterPosition(nextPosition);
        setLettersArray(Array(testLength).fill([activeLetters[nextPosition]]));
        setCursorPosition(0);
      } else {
        // Completed all home row letters, advance to level 1
        setUserLevel(1);
        setCursorPosition(0);
        setLetterPosition(0);
      }
    }
  }, [
    cursorPosition,
    letterPosition,
    activeLetters,
    setLettersArray,
    setCursorPosition,
    setUserLevel,
    testLength,
  ]);

  return (
    <>
      {lettersArray.map((letter, index) => (
        <span
          key={index}
          className={`target-text ${TextColor(
            index,
            correctness,
            cursorPosition,
          )}`}
        >
          {letter}
        </span>
      ))}
    </>
  );
}
