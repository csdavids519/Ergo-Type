import TextColor from "./TextColor";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
// Display text for user to type based on level

interface TextDisplayProps {
  correctness: string[];
  lettersArray: string[][];
  setLettersArray: React.Dispatch<React.SetStateAction<string[][]>>;
  cursorPosition: number;
  userLevel: number;
  topRow: string;
  homeRow: string;
  lowerRow: string;
}

export default function TextDisplay({
  correctness,
  lettersArray,
  setLettersArray,
  cursorPosition,
  userLevel,
  topRow,
  homeRow,
  lowerRow,
}: TextDisplayProps) {
  useEffect(() => {
    if (homeRow) {
      const words = homeRow;
      const letters = words.split("").map((letter: string) => [letter]);
      setLettersArray(letters);
    }
  }, [homeRow, setLettersArray]);

  return (
    <>
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
