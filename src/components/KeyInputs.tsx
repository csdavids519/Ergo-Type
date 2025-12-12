import { useEffect } from "react";
// listen for key inputs during typing exercises

interface KeyInputProps {
  setCorrectness: React.Dispatch<React.SetStateAction<string[]>>;
  setCursorPosition: React.Dispatch<React.SetStateAction<number>>;
  cursorPosition: number;
  lettersArray: string[][];
}

export default function KeyInput({
  setCorrectness,
  setCursorPosition,
  cursorPosition,
  lettersArray,
}: KeyInputProps) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      setCorrectness((prev) => {
        const next = [...prev];
        if (lettersArray[cursorPosition][0] === event.key) {
          next[cursorPosition] = "correct";
          setCursorPosition((x) => x + 1);
        } else {
          next[cursorPosition] = "wrong";
        }
        return next;
      });
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cursorPosition]);
  return null;
}
