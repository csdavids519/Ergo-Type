// get users keyboard layout
interface LoadKeyLayoutProps {
  setUserTopRow: (input: string[]) => void;
  setUserHomeRow: (input: string[]) => void;
  setUserLowerRow: (input: string[]) => void;
  userTopRow: string[];
  userHomeRow: string[];
  userLowerRow: string[];
}

export default function LoadKeyLayout({
  setUserTopRow,
  setUserHomeRow,
  setUserLowerRow,
  userTopRow,
  userHomeRow,
  userLowerRow,
}: LoadKeyLayoutProps) {
  return (
    <div className="p-4">
      <input
        className="border p-2 mr-2"
        type="text"
        value={userTopRow}
        onChange={(e) => setUserTopRow(e.target.value)}
      />

      <input
        className="border p-2"
        type="text"
        value={userHomeRow}
        onChange={(e) => setUserHomeRow(e.target.value)}
      />

      <input
        className="border p-2"
        type="text"
        value={userLowerRow}
        onChange={(e) => setUserLowerRow(e.target.value)}
      />

      <div className="mt-4">
        <span>First: {userTopRow}</span>
        <br />
        <span>Second: {userHomeRow}</span>
        <br />
        <span>Second: {userLowerRow}</span>
      </div>
    </div>
  );
}
