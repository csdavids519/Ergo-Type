import TextColor from "./TextColor";
import { el, faker } from "@faker-js/faker";
import { act, useEffect, useState } from "react";
// Display text for user to type based on level

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
  const [letterPosition, setLetterPosition] = useState(0);
  const testLength = 5;

  const [activeLetters, setActiveLetters] = useState(homeRow.split(""));

  useEffect(() => {
    if (userLevel === 0) {
      setActiveLetters(homeRow.split(""));
    } else if (userLevel === 1) {
      setActiveLetters(topRow.split(""));
    }
  }, [userLevel]);

  // Initialize with first letter repeated 3 times
  useEffect(() => {
    const displayLetters = Array(testLength).fill([activeLetters[0]]);
    setLettersArray(displayLetters);
  }, [activeLetters, userLevel]);

  console.log("ACTIVE LETTERS", activeLetters);

  // Check cursor position and advance to next letter
  useEffect(() => {
    if (!activeLetters) return;

    // When cursor reaches the end (testLength)
    if (cursorPosition === testLength && cursorPosition > 0) {
      let nextPosition = letterPosition + 1;

      // Check if there's a next letter
      console.log("nextpos", nextPosition);
      console.log("length: ", activeLetters.length);
      if (nextPosition < activeLetters.length) {
        setLetterPosition(nextPosition);
        const nextLetters = Array(testLength).fill([
          activeLetters[nextPosition],
        ]);
        setLettersArray(nextLetters);
        setCursorPosition(0); // Reset cursor for new letter set
      }

      if (
        cursorPosition === testLength &&
        nextPosition === activeLetters.length
      ) {
        setUserLevel(1);
        setCursorPosition(0);
        setLetterPosition(0);
        nextPosition = 0;
      }
    }
  }, [
    cursorPosition,
    homeRow,
    letterPosition,
    setLettersArray,
    setCursorPosition,
    activeLetters,
    userLevel,
  ]);

  const userMessage: string = `Level ${userLevel}`;

  return (
    <>
      <p>{userMessage} </p>
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
