import "./Header.css";
export default function Header({ handleRestart, scoreval }) {
  console.log(scoreval.current);
  return (
    <div className="header-container">
      <div className="header-container-headings">
        {scoreval.current === null ? (
          <h1>2048</h1>
        ) : (
          <h3>Score:{scoreval.current}</h3>
        )}
        <p>Join the numbers to get the 2048 tile !</p>
      </div>
      <div className="new-game">
        <button onClick={() => handleRestart(true)}>New Game</button>
      </div>
    </div>
  );
}
