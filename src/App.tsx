import { useEffect, useState, type FormEvent } from "react";
import { faker } from "@faker-js/faker";

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

  // manage text color
  function textColor(index: number) {
    return correctness[index] === "wrong"
      ? "bg-red-500 font-bold"
      : index === cursorPosition
      ? "text-blue-600"
      : correctness[index] === "correct"
      ? "text-slate-100"
      : "text-slate-400";
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        {lettersArray.map((letter, index) => (
          <span key={index} className={`target-text ${textColor(index)}`}>
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}
export default App;
