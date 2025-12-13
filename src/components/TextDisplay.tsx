import TextColor from "./TextColor";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
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
  const testLength = 5; // constant

  // Initialize with first letter repeated 3 times
  useEffect(() => {
    if (homeRow) {
      const letters = homeRow.split("");
      const initialLetters = Array(testLength).fill([letters[0]]);
      setLettersArray(initialLetters);
    }
  }, [homeRow, setLettersArray]);

  // Check cursor position and advance to next letter
  useEffect(() => {
    if (!homeRow) return;

    const letters = homeRow.split("");

    // When cursor reaches the end (testLength)
    if (cursorPosition === testLength && cursorPosition > 0) {
      const nextPosition = letterPosition + 1;

      // Check if there's a next letter
      if (nextPosition < letters.length) {
        setLetterPosition(nextPosition);
        const nextLetters = Array(testLength).fill([letters[nextPosition]]);
        setLettersArray(nextLetters);
        setCursorPosition(0); // Reset cursor for new letter set
      }

      if (cursorPosition === testLength && nextPosition === letters.length) {
        setUserLevel(1);
      }
    }
  }, [
    cursorPosition,
    homeRow,
    letterPosition,
    setLettersArray,
    setCursorPosition,
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
            cursorPosition
          )}`}
        >
          {letter}
        </span>
      ))}
    </>
  );
}
