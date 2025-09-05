import React from "react";
import Article from './Article'
import Header from './Header'

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      learn react!
      <Header />
      <About />
      <Article />
    </div>
  );
}

export default App;
