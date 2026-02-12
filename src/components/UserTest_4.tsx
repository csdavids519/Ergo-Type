// UserTest_2.tsx
// Test: Repeat each letter from all rows
// Goal: Commit all letter positions to memory

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

console.log("UserTest_4 component loaded");

interface UserTest_4Props {
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

export default function UserTest_4({
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  setUserScore,
}: UserTest_4Props) {
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const targetGroup = [
    "the",
    "be",
    "that",
    "have",
    "this",
    "but",
    "from",
    "they",
    "say",
  ];
  const targetGroupUpper = targetGroup.map((x) => x.toUpperCase());
  const testLength = 5;

  /*
    [
  "the","be","to","of","and","a","in","that","have","I",
  "it","for","not","on","with","he","as","you","do","at",
  "this","but","his","by","from","they","we","say","her","she",
  "or","an","will","my","one","all","would","there","their","is",
  "are","was","were","been","has","had","what","when","where"
]
  */

  // set initial letter display
  useEffect(() => {
    const splitLetters = targetGroupUpper[0].split("");
    // setDisplayText(
    //   Array(testLength)
    //     .fill(null)
    //     .flatMap(() => [...splitLetters, " "]),
    // );
    setDisplayText(
      Array(testLength)
        .fill(null)
        .flatMap(() => [...splitLetters]),
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
            .flatMap(() => [...splitLetters]),
        );

        setCurrentTargetIndex(nextIndex);
        setCursorPosition(0);
        setCorrectness(["static"]);
        setUserScore(0);
        console.log({ currentTargetIndex });
      }
      // check if at end of group target
      else {
        // set user to next test
        setUserLevel(5);
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
