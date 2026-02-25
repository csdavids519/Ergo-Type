import { useState, useEffect } from "react";
import TextColor from "./TextColor";
import type { LevelConfig } from "../config/levelConfigs";

interface UserTestProps {
  config: LevelConfig;
  levelIndex: number;
  correctness: string[];
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  displayText: string[];
  setDisplayText: React.Dispatch<React.SetStateAction<string[]>>;
  cursorPosition: number;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  setUserLevel: React.Dispatch<React.SetStateAction<number>>;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
}

function buildDisplayText(config: LevelConfig, index: number): string[] {
  const entry = config.targetGroup[index].toUpperCase();
  if (config.displayMode === "single-char") {
    return Array(config.testLength).fill(entry);
  }
  const letters = entry.split("");
  return Array(config.testLength).fill(null).flatMap(() => [...letters, " "]);
}

export default function UserTest({
  config,
  levelIndex,
  correctness,
  setCorrectness,
  displayText,
  setDisplayText,
  cursorPosition,
  setCursorPosition,
  setUserLevel,
  setUserScore,
}: UserTestProps) {
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const [repCount, setRepCount] = useState(0);

  useEffect(() => {
    setDisplayText(buildDisplayText(config, 0));
  }, []);

  useEffect(() => {
    if (cursorPosition === displayText.length && cursorPosition > 0) {
      if (config.progression.mode === "sequential") {
        const nextIndex = currentTargetIndex + 1;
        if (nextIndex < config.targetGroup.length) {
          setCurrentTargetIndex(nextIndex);
          setDisplayText(buildDisplayText(config, nextIndex));
          setCursorPosition(0);
          setCorrectness(["static"]);
        } else {
          setUserLevel(levelIndex + 1);
          setCursorPosition(0);
          setCorrectness(["static"]);
          setUserScore(0);
        }
      } else {
        const nextIndex = Math.floor(Math.random() * config.targetGroup.length);
        setRepCount((prev) => prev + 1);
        if (repCount < config.progression.maxRepCount) {
          setCurrentTargetIndex(nextIndex);
          setDisplayText(buildDisplayText(config, nextIndex));
          setCursorPosition(0);
          setCorrectness(["static"]);
        } else {
          setUserLevel(levelIndex + 1);
          setCursorPosition(0);
          setCorrectness(["static"]);
          setUserScore(0);
        }
      }
    }
  }, [cursorPosition, setDisplayText]);

  return (
    <>
      {displayText.map((letter, index) => (
        <span
          key={index}
          className={`target-text ${TextColor(index, correctness, cursorPosition)}`}
        >
          {letter}
        </span>
      ))}
    </>
  );
}
