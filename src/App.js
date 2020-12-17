import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Produkter from "./components/Produkter/Produkter"
import Main from "./components/Main/Main"
import Posts from "./components/Posts/Posts"

// Contentful .ENV
require('dotenv').config();
const spaceID = process.env.REACT_APP_SPACE_ID;
const deliveryID = process.env.REACT_APP_CONTENT_DELIVERY_ID;

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/blog" render={() => <Posts spaceID={spaceID} deliveryID={deliveryID} />} />
          <Route exact path="/produkter" render={() => <Produkter spaceID={spaceID} deliveryID={deliveryID} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

