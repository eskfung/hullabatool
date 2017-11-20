import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Mastermind from 'mastermind/Mastermind';
import "./App.css";

const MainContainer = () => (
  <div>
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/mastermind" className="nav-link">Mastermind</Link>
    </nav>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/mastermind" component={Mastermind} />
    </main>
  </div>
);

const App = () => (
  <BrowserRouter>
    <MainContainer />
  </BrowserRouter>
);

export default App;

ReactDOM.render(
  React.createElement(App, null),
  document.body.appendChild(document.createElement('div'))
);
