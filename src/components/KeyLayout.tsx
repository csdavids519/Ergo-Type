import { type FormEvent } from "react";

// ask user for keybaord layout

// form with 3 input boxes for top home and lower rows of keys
// on submit saves to state

interface KeyLayoutProps {
  setTopRow: (value: string) => void;
  setHomeRow: (value: string) => void;
  setLowerRow: (value: string) => void;
  setSubmitted: (value: boolean) => void;
  topRow: string;
  homeRow: string;
  lowerRow: string;
  submitted: boolean;
}

export default function KeyLayout({
  setTopRow,
  setHomeRow,
  setLowerRow,
  setSubmitted,
  topRow,
  homeRow,
  lowerRow,
  submitted,
}: KeyLayoutProps) {
  // manage form update
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (topRow !== "" && homeRow !== "" && lowerRow !== "") {
      setSubmitted(true);
    }
  };

  return (
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
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
