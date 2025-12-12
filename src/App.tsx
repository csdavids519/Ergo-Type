import { useState } from "react";
import { faker } from "@faker-js/faker";
import KeyInput from "./components/KeyInputs";
import KeyLayout from "./components/KeyLayout";
import TextDisplay from "./components/TextDisplay";

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

  // KeyLayout States
  const [topRow, setTopRow] = useState("");
  const [homeRow, setHomeRow] = useState("");
  const [lowerRow, setLowerRow] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <KeyLayout
        topRow={topRow}
        homeRow={homeRow}
        lowerRow={lowerRow}
        submitted={submitted}
        setTopRow={setTopRow}
        setHomeRow={setHomeRow}
        setLowerRow={setLowerRow}
        setSubmitted={setSubmitted}
      />
      <KeyInput
        setCorrectness={setCorrectness}
        setCursorPosition={setCursorPosition}
        cursorPosition={cursorPosition}
        lettersArray={lettersArray}
      />
      <h1 className="text-3xl font-bold">Welcome.</h1>
      <div className="m-5 p-5 rounded-lg border-2 border-indigo-700">
        <TextDisplay
          correctness={correctness}
          lettersArray={lettersArray}
          cursorPosition={cursorPosition}
        />
      </div>
    </>
  );
}

export default App;
