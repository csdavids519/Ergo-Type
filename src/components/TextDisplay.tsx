// Manage the display of tests and advancement of user level

import TextColor from "./TextColor";
import { el, faker } from "@faker-js/faker";
import { act, useEffect, useState } from "react";
import UserTest_1 from "./UserTest_1";

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

  // Check cursor position and advance to next letter
  useEffect(() => {
    if (!activeLetters) return;

    // When cursor reaches the end (testLength)
    if (cursorPosition === testLength && cursorPosition > 0) {
      let nextPosition = letterPosition + 1;

      // Check if there's a next letter
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

  let renderTest;

  if (userLevel === 1) {
    renderTest = (
      <UserTest_1 topRow={topRow} homeRow={homeRow} lowerRow={lowerRow} />
    );
  } else if (userLevel == 2) {
    renderTest = (
      <UserTest_2 topRow={topRow} homeRow={homeRow} lowerRow={lowerRow} />
    );
  }

  return (
    <>
      <p>{userMessage} </p>
      {renderTest}
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
