import { Link } from "react-router-dom";
import { useKeyboardLayout } from "../contexts/KeyboardLayoutContext";
import KeyLayout from "../components/KeyLayout";

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

  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-black to-indigo-700 flex items-center justify-center">
      <div className="text-center text-slate-200">
        <h1 className="text-6xl font-bold mb-4">Ergo_Type</h1>
        <p className="text-xl mb-8">Welcome.</p>
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
        <div className="space-x-4">
          <Link
            to="/typing"
            className="inline-block bg-slate-500 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition"
          >
            Start Typing
          </Link>
        </div>
      </div>
    </div>
  );
}
