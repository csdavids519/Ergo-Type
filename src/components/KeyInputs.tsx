import { useEffect } from "react";
// listen for key inputs during typing exercises

interface KeyInputProps {
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
  cursorPosition: number;
  displayText: string[];
}

export default function KeyInput({
  setCorrectness,
  setCursorPosition,
  setUserScore,
  cursorPosition,
  displayText,
}: KeyInputProps) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (
        cursorPosition >= displayText.length ||
        !displayText[cursorPosition]
      ) {
        return;
      }

      setCorrectness((prev) => {
        const next = [...prev];
        console.log("Target: ", displayText[cursorPosition][0]);
        console.log("Key: ", event.key);
        if (displayText[cursorPosition][0] === event.key) {
          next[cursorPosition] = "correct";
          setUserScore((x) => x + 1);
          setCursorPosition((x) => x + 1);
        } else {
          next[cursorPosition] = "wrong";
          setUserScore((x) => x - 1);
        }
        return next;
      });
    }

    // Auto-skip spaces
    if (displayText[cursorPosition]?.[0] === " ") {
      setCorrectness((prev) => {
        const next = [...prev];
        next[cursorPosition] = "correct";
        return next;
      });
      setUserScore((x) => x + 1);
      setCursorPosition((x) => x + 1);
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cursorPosition, displayText, setCorrectness, setCursorPosition]);

  return null;
}
