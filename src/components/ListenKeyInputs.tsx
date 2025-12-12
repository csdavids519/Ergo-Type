// listen for key inputs
import { useEffect, useState, type FormEvent } from "react";

useEffect(() => {
  function handleKeyPress(event: KeyboardEvent) {
    setCorrectness((prev: string[]) => {
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
