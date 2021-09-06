import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes, { generateMeta } from "./lib/routes";
import GlobalStyles from "./lib/ui/GlobalStyle";

const App = () => {
  const { unrestricted, restricted } = routes;

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        {unrestricted.map(({ path, Component, meta }) => (
          <Route
            exact
            key={path}
            path={path}
            render={(props) => <Component meta={generateMeta(meta)} />}
          />
        ))}
        {restricted.map(({ path, Component, meta }) => (
          <Route
            exact
            key={path}
            path={path}
            render={(props) => <Component meta={generateMeta(meta)} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
