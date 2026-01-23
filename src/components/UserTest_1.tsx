// User Test 1
// Group - each row
// Test - Repeat each letter
// Goal - Commit letter positions to memory

import { useState, useEffect } from "react";

const [activeLetterGroup, setActiveLetterGroup] = useState<string[]>([]);
const [displayLetters, setDisplayLetters] = useState<string[][]>([]);
const repeatCount = 5;

interface UserTest_1Props {
  topRow: string;
  homeRow: string;
  lowerRow: string;
}

export default function UserTest_1({
  topRow,
  homeRow,
  lowerRow,
}: UserTest_1Props) {
  // get the current letter group - all letters ordered by row
  const groupLetters = homeRow + topRow + lowerRow;
  setActiveLetterGroup(groupLetters.split(""));

  // test for each letter one at a time
  useEffect(() => {
    setDisplayLetters(Array(repeatCount).fill([activeLetterGroup[0]]));
  }, [activeLetters]);
}
