import { useContext, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes, { generateMeta } from "./lib/routes";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./components/common/NotFound";

import GlobalStyles from "./lib/ui/GlobalStyle";
import Nav from "./components/common/Nav";
import Aside from "./components/common/Aside";
import NewTweet from "./components/restricted/NewTweet";
import { Main } from "./styled";

const App = () => {
  const { unrestricted, restricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);

  const [mainTarget, setMainTarget] = useState("");

  const customStyles = {
    content: {
      width: "400px",
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflowY: "hidden",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  /**
   * When we put a url manually on production build a message says that the page couldn't be found.
   */
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
      <Main mainTarget={mainTarget}>
        {isLoggedIn() && <Nav setIsOpen={setIsOpen} />}
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

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <NewTweet />
        </Modal>
        {isLoggedIn() && <Aside />}
      </Main>
    </BrowserRouter>
  );
};

export default App;
