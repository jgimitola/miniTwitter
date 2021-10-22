import { useContext, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import routes, { generateMeta } from "./lib/routes";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./components/common/NotFound";

import GlobalStyles from "./lib/ui/GlobalStyle";
import Nav from "./components/common/Nav";
import Aside from "./components/common/Aside";
import { Main } from "./styled";

const App = () => {
  const { unrestricted, restricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);

  const [mainTarget, setMainTarget] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main mainTarget={mainTarget}>
        {isLoggedIn() && <Nav />}
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
                  <Component
                    meta={generateMeta(meta)}
                    setMainTarget={setMainTarget}
                  />
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
                  <Component
                    meta={generateMeta(meta)}
                    setMainTarget={setMainTarget}
                  />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
        {isLoggedIn() && <Aside />}
      </Main>
    </BrowserRouter>
  );
};

export default App;
