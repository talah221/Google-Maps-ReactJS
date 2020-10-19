import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import { About } from './pages/About';
import { MainApp } from './pages/MainApp'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={MainApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
