import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import routes from "./lib/routes";
import Nav from "./components/unrestricted/Nav";

const App = () => {
  const { unrestricted, restricted } = routes;

  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Switch>
          {unrestricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
          {restricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
