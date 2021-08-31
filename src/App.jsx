import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import routes, { generateMeta } from "./lib/routes";
import Nav from "./components/unrestricted/Nav";

const App = () => {
  const { unrestricted, restricted } = routes;

  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Switch>
          {unrestricted.map(({ path, Component, meta }) => (
            <Route
              exact
              path={path}
              render={() => <Component meta={generateMeta(meta)} />}
            />
          ))}
          {restricted.map(({ path, Component, meta }) => (
            <Route
              exact
              path={path}
              render={() => <Component meta={generateMeta(meta)} />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
