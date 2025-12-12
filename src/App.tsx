import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import TextColor from "./components/TextColor";

function App() {
  const [cursorPosition, setCursorPosition] = useState(0);
  const [lettersArray] = useState(() =>
    faker.word
      .words(10)
      .split("")
      .map((letter: string) => [letter])
  );
  const [correctness, setCorrectness] = useState(() =>
    Array(lettersArray.length).fill("static")
  );

  // listen for key inputs
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

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
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
      </div>
    </>
  );
}

export default App;
