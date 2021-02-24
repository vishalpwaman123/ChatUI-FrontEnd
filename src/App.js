import Screen from './Component/Screen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Screen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
