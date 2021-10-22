import { useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import routes, { generateMeta } from "./lib/routes";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./components/common/NotFound";

import GlobalStyles from "./lib/ui/GlobalStyle";

const App = () => {
  const { unrestricted, restricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        {unrestricted.map(({ path, Component, meta }) => (
          <Route
            exact
            key={path}
            path={path}
            render={(props) => {
              return isLoggedIn() ? (
                <Redirect to="/home" />
              ) : (
                <Component meta={generateMeta(meta)} />
              );
            }}
          />
        ))}
        {restricted.map(({ path, Component, meta }) => (
          <Route
            exact
            key={path}
            path={path}
            render={(props) => {
              return isLoggedIn() ? (
                <Component meta={generateMeta(meta)} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
