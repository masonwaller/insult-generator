import React from "react";
import "./App.css";

function App() {
  const [words, setWords] = React.useState("");

  const handleClick = () => {
    let final = "";
    fetch("https://random-word-api.herokuapp.com/word?number=2")
      .then(data => data.json())
      .then(data => data.map(word => (final = final + " " + word)))
      .then(data => setWords(final));
  };
  return (
    <div className="App">
      <button onClick={() => handleClick()}>Generate</button>
      <ul>
        <li key={words}>You're a {words}</li>
      </ul>
    </div>
  );
}

export default App;
