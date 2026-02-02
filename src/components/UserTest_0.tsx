// UserTest_1.tsx
// Test: repeat common letter combinations
// Goal: increase speed with common letter combinations

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

console.log("UserTest_0 component loaded");

interface UserTest_1Props {
  topRow: string;
  homeRow: string;
  lowerRow: string;
  correctness: string[];
  lettersArray: string[][];
  setLettersArray: React.Dispatch<React.SetStateAction<string[][]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  userLevel: number;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
  testLength: number;
}

export default function UserTest_1({
  topRow,
  homeRow,
  lowerRow,
  correctness,
  lettersArray,
  setLettersArray,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  testLength,
}: UserTest_1Props) {
  const [activeLetterGroup, setActiveLetterGroup] = useState<string[]>([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // Initialize letter group on mount or when rows change
  useEffect(() => {
    const groupLetters = homeRow + topRow + lowerRow;
    console.log("homeRow:", { homeRow });
    console.log("groupLetters:", { groupLetters });
    const letters = groupLetters.split("");
    setActiveLetterGroup(letters);

    // Initialize with first letter
    if (letters.length > 0) {
      setLettersArray(Array(testLength).fill([letters[0]]));
    }
  }, [homeRow, topRow, lowerRow, setLettersArray, testLength]);

  console.log("lettersArray:", { lettersArray });

  // Handle progression through letters
  useEffect(() => {
    if (!activeLetterGroup.length) return;

    // When cursor reaches the end of current letter repetition
    if (cursorPosition === testLength && cursorPosition > 0) {
      const nextIndex = currentLetterIndex + 1;

      if (nextIndex < activeLetterGroup.length) {
        // Move to next letter
        setCurrentLetterIndex(nextIndex);
        setLettersArray(Array(testLength).fill([activeLetterGroup[nextIndex]]));
        setCursorPosition(0);
      } else {
        // Completed all letters in level 1, advance to level 2
        setUserLevel(1);
        setCursorPosition(0);
        setCurrentLetterIndex(0);
      }
    }
  }, [
    cursorPosition,
    currentLetterIndex,
    activeLetterGroup,
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
