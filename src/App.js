import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Travel from "./Pages/Travel";
import Photography from "./Pages/Photography";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/React-Website-BoilerPlate" exact component={Home} />
          {/* <Route path='/' exact component={AllPhotos} /> */}
          <Route path="/blog" component={Blog} />
          <Route path="/travel" component={Travel} />
          <Route path="/photography" component={Photography} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
