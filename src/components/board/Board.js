import "./Board.css";
// const board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];
export default function Board({ board }) {
  return (
    <ol id="game-board">
      {board.map((row, ri) => (
        <div key={ri} className="game-board-container">
          {row.map((col, ci) => (
            <div key={ci}>{col}</div>
          ))}
        </div>
      ))}
    </ol>
  );
}
