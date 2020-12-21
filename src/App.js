import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Produkter from "./components/Produkter/Produkter"
import Main from "./components/Main/Main"
import Posts from "./components/Posts/Posts"
import Blurb from "./components/Blurb/Blurb"
import Splash from "./components/Splash/Splash"
import About from "./components/About/About"
import ContactInfo from "./components/ContactInfo/ContactInfo"

// Contentful .ENV
require('dotenv').config();
const spaceID = process.env.REACT_APP_SPACE_ID;
const deliveryID = process.env.REACT_APP_CONTENT_DELIVERY_ID;


function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
   },[]);

  return (
    <div className="App">

      {isLoading ? (
          <Splash  />
      ) : (

          <Router>
            <Nav />
            <Blurb />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/om-oss" component={About} />
              <Route exact path="/kontakt" component={ContactInfo} />
              <Route exact path="/blog" render={() => <Posts spaceID={spaceID} deliveryID={deliveryID} />} />
              <Route exact path="/produkter" render={() => <Produkter spaceID={spaceID} deliveryID={deliveryID} />} />
            </Switch>
            <Footer />
          </Router>

        )
      }

    </div >
  );
}

export default App;

