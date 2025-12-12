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
}

export default function TextDisplay({
  correctness,
  lettersArray,
  setLettersArray,
  cursorPosition,
  userLevel,
}: TextDisplayProps) {
  // Set letters based on level

  //   const words = faker.word.words(10);
  //   const letters = words.split("").map((letter: string) => [letter]);
  const letters = words.split("").map((letter: string) => [letter]);
  setLettersArray(letters);

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
