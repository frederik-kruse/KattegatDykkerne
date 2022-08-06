import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Pages/Hjem/Hjem";

import OmKlubben from "./Pages/OmKlubben/OmKlubben";

import Indmeldelse from "./Pages/Indmeldelse/Indmeldelse";

import Aktiviteter from "./Pages/Aktiviteter/Aktiviteter";

import Kontakt from "./Pages/Kontakt/Kontakt";

import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";

import ScrollToTop from "./assets/ScrollToTop";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/OmKlubben" exact component={OmKlubben} />
            <Route path="/Indmeldelse" exact component={Indmeldelse} />
            <Route path="/Aktiviteter" exact component={Aktiviteter} />
            <Route path="/Kontakt" exact component={Kontakt} />

            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
