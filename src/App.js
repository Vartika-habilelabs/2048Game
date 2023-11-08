import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Instructions from "./components/instructions/Instructions";
import traversal from "./utils/Traversal";

const INITIAL_BOARD = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setClickedButton("top");
          break;
        case "ArrowDown":
          setClickedButton("bottom");
          break;
        case "ArrowLeft":
          setClickedButton("left");
          break;
        case "ArrowRight":
          setClickedButton("right");
          break;
        default:
          break;
      }
    };
    console.log("inside effect");

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      console.log("inside return");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (clickedButton) {
      const updatedBoard = traversal(board, clickedButton);
      setBoard(updatedBoard);
      setClickedButton(null);
    }
  }, [board, clickedButton]);
  return (
    <div className="game-container">
      <Board board={board} />
      <Instructions />
    </div>
  );
}

export default App;
