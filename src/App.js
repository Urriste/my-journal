import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main></Main>
      </Route>
    </Router>
  );
}

export default App;
