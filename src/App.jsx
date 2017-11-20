import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const HomePage = () => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Placeholder
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

export default App;

ReactDOM.render(
  React.createElement(App, null),
  document.body.appendChild(document.createElement('div'))
);
