
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Todo from "./Pages/Todo";

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Todo />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
