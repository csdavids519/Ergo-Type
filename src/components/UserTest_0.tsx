// UserTest_0.tsx
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
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  displayText: string[];
  setDisplayText: React.Dispatch<React.SetStateAction<string[]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  userLevel: number;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function UserTest_0({
  topRow,
  homeRow,
  lowerRow,
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
}: UserTest_1Props) {
  console.log("UserTest_0 component RUNNING");
  // const testGroup = (homeRow + topRow + lowerRow).split("");
  const targetGroup = "ASE".split("");
  console.log("targetGroup Test0:", { targetGroup });
  const [targetGroupIndex, setTargetGroupIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [randLetterCount, setRandLetterCount] = useState(0);
  const [test1End, setTest1End] = useState(0);

  const testLength = 5;
  let nextLetterIndex = 0;
  const [testNumber, setTestNumber] = useState(0);

  // Initialize letter group on mount or when rows change
  useEffect(() => {
    // Initialize with first letter
    if (targetGroup.length > 0) {
      setDisplayText(Array(testLength).fill([targetGroup[0]]));
    }
  }, [setDisplayText, testLength]);

  // Handle progression through letters
  useEffect(() => {
    if (!targetGroup.length) return;
    console.log(nextLetterIndex);
    console.log({ testNumber });
    console.log(randLetterCount);

    // When cursor reaches the end of current letter repetition
    if (cursorPosition === testLength && cursorPosition > 0) {
      if (testNumber === 0) {
        // set display text to each letter in order
        console.log("RUNNING: set display text to each letter in order");
        nextLetterIndex = currentLetterIndex + 1;
        if (nextLetterIndex >= targetGroup.length) {
          // end of test 0
          console.log("RUNNING: end of test 0");
          setTestNumber(1);
          return;
        }
      } else if (testNumber === 1 && randLetterCount === test1End) {
        // Completed all letters in level 0, advance to level 1
        console.log(
          "RUNNING: Completed all letters in level 0, advance to level 1",
        );
        setUserLevel(1);
        setCursorPosition(0);
        setCurrentLetterIndex(0);
      } else {
        // testNumber 1 - set dispay text to random letters
        console.log(
          "RUNNING: testNumber 1 - set dispay text to random letters",
        );
        nextLetterIndex = Math.floor(Math.random() * targetGroup.length);
        setRandLetterCount(randLetterCount + 1);
      }

      if (nextLetterIndex < targetGroup.length) {
        // Move to next letter
        console.log("RUNNING: Move to next letter");
        setCurrentLetterIndex(nextLetterIndex);
        setDisplayText(Array(testLength).fill([targetGroup[nextLetterIndex]]));
        setCursorPosition(0);
      }
    }
  }, [
    cursorPosition,
    currentLetterIndex,
    setDisplayText,
    setCursorPosition,
    setTestNumber,
    testNumber,
    targetGroup,
    testLength,
    randLetterCount,
    test1End,
    setRandLetterCount,
    setCurrentLetterIndex,
    setUserLevel,
  ]);

  return (
    <>
      {displayText.map((letter, index) => (
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
