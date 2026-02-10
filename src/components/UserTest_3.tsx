// UserTest_2.tsx
// Test: Repeat each letter from all rows
// Goal: Commit all letter positions to memory

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

console.log("UserTest_2 component loaded");

interface UserTest_2Props {
  correctness: string[];
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  displayText: string[];
  setDisplayText: React.Dispatch<React.SetStateAction<string[]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  userLevel: number;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function UserTest_2({
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
}: UserTest_2Props) {
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const targetGroup = [
    "the",
    "ing",
    "her",
    "ere",
    "ent",
    "tha",
    "nth",
    "was",
    "eth",
    "for",
    "dth",
    "has",
    "nce",
    "edt",
    "tis",
    "oft",
    "sth",
    "men",
    "res",
    "ion",
    "all",
    "not",
    "ver",
    "his",
    "thi",
    "ter",
    "ate",
    "ers",
    "hat",
  ];
  const targetGroupUpper = targetGroup.map((x) => x.toUpperCase());
  const testLength = 5;

  /*
    "the",
    "and",
    "ing",
    "her",
    "ere",
    "ent",
    "tha",
    "nth",
    "was",
    "eth",
    "for",
    "dth",
    "has",
    "nce",
    "edt",
    "tis",
    "oft",
    "sth",
    "men",
    "res",
    "ion",
    "all",
    "not",
    "ver",
    "his",
    "thi",
    "ter",
    "ate",
    "ers",
    "hat",
  */

  // set initial letter display
  useEffect(() => {
    const splitLetters = targetGroupUpper[0].split("");
    setDisplayText(
      Array(testLength)
        .fill(null)
        .flatMap(() => [...splitLetters, " "]),
    );
  }, [setDisplayText]);

  console.log("targetGroup:", { targetGroupUpper });
  console.log("displayText:", { displayText });
  console.log("cursorPosition:", { cursorPosition });

  // Handle progression through letters
  useEffect(() => {
    // check cursor reaches end of current test length
    if (cursorPosition === displayText.length && cursorPosition > 0) {
      const nextIndex = currentTargetIndex + 1;

      // check not at end of target group
      if (nextIndex < targetGroup.length) {
        // move to next letter
        const splitLetters = targetGroupUpper[nextIndex].split("");
        setDisplayText(
          Array(testLength)
            .fill(null)
            .flatMap(() => [...splitLetters, " "]),
        );

        setCurrentTargetIndex(nextIndex);
        setCursorPosition(0);
        setCorrectness(["static"]);
        console.log({ currentTargetIndex });
      }
      // check if at end of group target
      else {
        // set user to next test
        setUserLevel(3);
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
