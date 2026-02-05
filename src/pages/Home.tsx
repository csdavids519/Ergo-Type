import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const {
    topRow,
    homeRow,
    lowerRow,
    submitted,
    setTopRow,
    setHomeRow,
    setLowerRow,
    setSubmitted,
  } = useKeyboardLayout();
  const navigate = useNavigate();

  // manage form update
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (topRow !== "" && homeRow !== "" && lowerRow !== "") {
      setSubmitted(true);
      navigate("/typing");
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-black to-gray-700 flex items-center justify-center">
      <div className="text-center text-slate-200">
        <h1 className="text-6xl font-bold mb-4 text-blue-700">Ergo_Type</h1>
        <div>
          {!submitted && (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="text-center px-10 py-3 mb-5 border-2 text-2xl font-bold"
                  value={topRow}
                  placeholder="Enter your TOP row keys"
                  onChange={(e) => setTopRow(e.target.value.toUpperCase())}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="text-center px-10 py-3 mb-5 border-2 text-2xl font-bold"
                  value={homeRow}
                  placeholder="Enter your HOME row keys"
                  onChange={(e) => setHomeRow(e.target.value.toUpperCase())}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="text-center px-10 py-3 mb-5 border-2 text-2xl font-bold"
                  value={lowerRow}
                  placeholder="Enter your LOWER row keys"
                  onChange={(e) => setLowerRow(e.target.value.toUpperCase())}
                />
              </div>
              <button
                className="inline-block bg-slate-500 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition"
                type="submit"
              >
                Start Typing
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
