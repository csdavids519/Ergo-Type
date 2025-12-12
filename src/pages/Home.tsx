import { useState, type FormEvent } from "react";

// take the keyboard layout
export default function UserKeyLayout() {
  const [topRow, setTopRow] = useState<string>("");
  const [homeRow, setHomeRow] = useState<string>("");
  const [lowerRow, setLowerRow] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // manage form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (topRow !== "" && homeRow !== "" && lowerRow !== "") {
      setSubmitted(true);
    }
  };

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
  </div>;
}
