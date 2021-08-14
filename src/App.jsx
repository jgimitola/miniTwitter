import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Root from './components/Root';
import Login from './components/Login';
import SignUp from './components/SingUp';
import PasswordRecovery from './components/PasswordRecovery';
import Home from './components/Home';
import Profile from './components/Profile';
import Tweet from './components/Tweet';
import SearchResult from './components/SearchResult';
import Timeline from './components/Timeline';
import Trend from './components/Trend';
import PrivateNav from './components/PrivateNav';


const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Root />
          </Route>

          <Route path="/login">
            <Nav />
            <Login />
          </Route>

          <Route path="/signup">
            <Nav />
            <SignUp />
          </Route>

          <Route path="/passwordrecovery">
            <Nav />
            <PasswordRecovery />
          </Route>

          <Route path="/home">
            <PrivateNav />
            <Home />
          </Route>

          <Route path="/profile">
            <PrivateNav />
            <Profile />
          </Route>

          <Route path="/timeline/:username">
            <PrivateNav />
            <Timeline />
          </Route>

          <Route path="/tweets/:id">
            <PrivateNav />
            <Tweet />
          </Route>

          <Route path="/trending/:topic">
            <PrivateNav />
            <Trend />
          </Route>

          <Route path="/search/results">
            <PrivateNav />
            <SearchResult />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
