// UserTest_2.tsx
// Test: Repeat each letter from all rows
// Goal: Commit all letter positions to memory

import { useState, useEffect } from "react";
import TextColor from "./TextColor";

console.log("UserTest_5 component loaded");

interface UserTest_5Props {
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
export default function UserTest_5({
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  setUserScore,
}: UserTest_5Props) {
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const targetGroup = [
    "The man was in the room and he had a plan",
    "He was not sure if it was the one but he would try",
    "that",
    "have",
    "this",
    "but",
    "from",
    "they",
    "say",
  ];
  const targetGroupUpper = targetGroup.map((x) => x.toUpperCase());
  const testLength = 1;

  /*
    [
The man was in the room and he had a plan.
He was not sure if it was the one, but he would try.
She was there with him, and they were at the door.
It was dark, and there was no sign of what was to come.
He said that they should go on, but she did not say yes at once.
We were all in that place for a reason.
There had been a time when they were not ready. Now they are.
This is the way.
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
        // end of current display text
        setCurrentTargetIndex(nextIndex);
        setCursorPosition(0);
        setCorrectness(["static"]);
        setUserScore(0);
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
