import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Produkter from "./components/Produkter/Produkter"
import Main from "./components/Main/Main"


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/produkter" component={Produkter} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

