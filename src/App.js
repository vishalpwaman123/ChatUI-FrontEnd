import Screen from './Component/MainScreen/Screen'
// import MyOrders from './Component/Menu/MyOrders.js'
import MyOrders from './Component/Menu/MyOrder/MyOrders'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Screen} />
          <Route exact path="/MyOrders" component={MyOrders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
