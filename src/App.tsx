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

  const [topRow, setTopRow] = useState<string>("");
  const [homeRow, setHomeRow] = useState<string>("");
  const [lowerRow, setLowerRow] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("");

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

  // manage form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(`${topRow}, ${homeRow}, ${lowerRow}`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div>
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2"
              value={topRow}
              onChange={(e) => setTopRow(e.target.value)}
            />
            <input
              type="text"
              className="border-2"
              value={homeRow}
              onChange={(e) => setHomeRow(e.target.value)}
            />
            <input
              type="text"
              className="border-2"
              value={lowerRow}
              onChange={(e) => setLowerRow(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        )}

        {submitted && <p>Top Row: {topRow}</p>}
        {submitted && <p>Home Row: {homeRow}</p>}
        {submitted && <p>Lower Row: {lowerRow}</p>}
      </div>
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
