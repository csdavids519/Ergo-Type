// UserTest_1.tsx
// Test: Repeat each letter from all rows
// Goal: Commit all letter positions to memory

import { useState, useEffect } from "react";
import TextColor from "./TextColor";
import test from "node:test";

console.log("UserTest_1 component loaded");

interface UserTest_0Props {
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
}: UserTest_0Props) {
  const [activeLetterGroup, setActiveLetterGroup] = useState<string[]>([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const digrams = ["th", "he", "in", "er"];

  /*
    "an",
    "re",
    "on",
    "at",
    "en",
    "nd",
    "ti",
    "es",
    "or",
    "te",
    "of",
    "ed",
    "is",
    "it",
    "al",
    "ar",
    "st",
    "to",
    "nt",
    "ng",
    "se",
    "ha",
    "as",
    "ou",
    "io",
    "le",
*/

  const trigrams = [
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
  ];

  // Initialize letter group on mount or when rows change
  useEffect(() => {
    const splitLetters = digrams[currentLetterIndex].split("");
    // console.log("splitLettters:", { splitLetters });
    const displayLetters = Array(3)
      .fill(null)
      .flatMap(() => [...splitLetters, " "]);
    // console.log("displayLetters:", { displayLetters });

    // workaround - group names to be updated
    setActiveLetterGroup(displayLetters);

    // Initialize with first letter
    if (displayLetters.length > 0) {
      setLettersArray(displayLetters);
    }
  }, [setLettersArray, currentLetterIndex, testLength]);

  console.log("lettersArray:", { lettersArray });
  console.log("cursorPosition:", { cursorPosition });

  // Handle progression through letters
  useEffect(() => {
    if (!activeLetterGroup.length) return;

    // When cursor reaches the end of current letter repetition
    if (cursorPosition === digrams.length && cursorPosition > 0) {
      const nextIndex = currentLetterIndex + 1;
      console.log("nextIndex:", { nextIndex });

      if (nextIndex < activeLetterGroup.length) {
        // Move to next letter
        setCurrentLetterIndex(nextIndex);
        setLettersArray(Array(testLength).fill([activeLetterGroup[nextIndex]]));
        setCursorPosition(0);
      } else {
        // Completed all letters in level 1, advance to level 2
        setUserLevel(2);
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
