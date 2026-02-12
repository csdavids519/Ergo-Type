// UserTest_1.tsx
// Test: repeat common letter combinations
// Goal: increase speed with common letter combinations

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

console.log("UserTest_1 component loaded");

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
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function UserTest_1({
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  setUserScore,
}: UserTest_1Props) {
  console.log("UserTest_1 component RUNNING");
  // const testGroup = (homeRow + topRow + lowerRow).split("");
  const targetGroup = "ASETF".split("");
  console.log({ targetGroup });
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const testLength = 5;
  const [repCount, setRepCount] = useState(0);
  const maxRepCount = 5; // targetGroup.length

  // set initial letter display
  useEffect(() => {
    setDisplayText(Array(testLength).fill([targetGroup[0]]));
  }, []);

  useEffect(() => {
    // check cursor reaches end of current test length
    if (cursorPosition === testLength && cursorPosition > 0) {
      // set letter index random. count how mahy times we run a new letter
      const nextIndex = Math.floor(Math.random() * targetGroup.length);
      setRepCount((repCount) => repCount + 1);
      // check not at end of rep count
      if (repCount < maxRepCount) {
        // move to next letter
        setCurrentTargetIndex(nextIndex);
        setDisplayText(Array(testLength).fill([targetGroup[nextIndex]]));
        setCursorPosition(0);
        setCorrectness(["static"]);
        console.log({ currentTargetIndex });
      }
      // at end of group target
      else {
        // set user to next test
        setUserLevel(2);
        setCursorPosition(0);
        setCorrectness(["static"]);
        setCurrentTargetIndex(0);
      }
    }
  }, [cursorPosition, setDisplayText]);

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
