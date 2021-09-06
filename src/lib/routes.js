import { Helmet } from "react-helmet";

import Root from "../components/unrestricted/Root";
import Login from "../components/unrestricted/Login";
import SignUp from "../components/unrestricted/SingUp";
import PasswordRecovery from "../components/unrestricted/PasswordRecovery";
import Home from "../components/restricted/Home";
import Profile from "../components/restricted/Profile";
import Tweet from "../components/restricted/Tweet";
import SearchResult from "../components/restricted/SearchResult";
import Timeline from "../components/restricted/Timeline";
import Trend from "../components/restricted/Trend";
import Explorer from "../components/restricted/Explorer";
import Notifications from "../components/restricted/Notifications";
import Messages from "../components/restricted/Messages";
import Bookmarks from "../components/restricted/Bookmarks";
import List from "../components/restricted/List";

const routes = {
  unrestricted: [
    {
      text: "🐦 miniTwitter",
      path: "/",
      Component: Root,
      meta: {
        title: "MiniTwitter",
        description: "MiniTwitter is a clon Twitter clon page",
      },
    },
    {
      text: "Log In",
      path: "/login",
      Component: Login,
      meta: {
        title: "MiniTwitter - Login",
        description: "Log in to your MiniTwitter account",
      },
    },
    {
      text: "Sign Up",
      path: "/signup",
      Component: SignUp,
      meta: {
        title: "MiniTwitter - Register",
        description: "Create your MiniTwitter account",
      },
    },
    {
      text: "Password Recovery",
      path: "/passwordrecovery",
      Component: PasswordRecovery,
      meta: {
        title: "MiniTwitter - Password Recovery",
        description: "Restore your account password",
      },
    },
  ],
  restricted: [
    {
      text: "🏡 Home",
      path: "/home",
      Component: Home,
      meta: {
        title: "MiniTwitter - Home",
        description:
          "Watch what is happening now. Read stories all around the world",
      },
    },
    {
      text: "Profile",
      path: "/profile",
      Component: Profile,
      meta: {
        title: "MiniTwitter - Profile",
        description: "Your profile in MiniTwitter",
      },
    },
    {
      text: "TimeLine",
      path: "/timeline/:user",
      Component: Timeline,
      meta: {
        title: "",
        description: "",
      },
    },
    {
      text: "Search Result",
      path: "/search/results",
      Component: SearchResult,
      meta: {
        title: "MiniTwitter - Search Results",
        description: "Results for search criteria",
      },
    },
    {
      text: "Tweet",
      path: "/tweets/:id",
      Component: Tweet,
      meta: {
        title: "MiniTwitter - Tweet",
        description: "Basic Tweet description",
      },
    },
    {
      text: "Trending Topic",
      path: "/trending/:topic",
      Component: Trend,
      meta: {
        title: "MiniTwitter - Trending",
        description: "Topic is trending on MiniTwitter, take a look",
      },
    },
    {
      text: "Explore",
      path: "/explore",
      Component: Explorer,
      meta: {
        title: "MiniTwitter - Explore",
        description: "Explore new things in MiniTwitter",
      },
    },
    {
      text: "Notifications",
      path: "/notifications",
      Component: Notifications,
      meta: {
        title: "MiniTwitter - Notifications",
        description: "Take a look at your new notifications",
      },
    },
    {
      text: "Messages",
      path: "/messages",
      Component: Messages,
      meta: {
        title: "MiniTwitter - Messages",
        description: "Chat with your contacts using MiniTwitter",
      },
    },
    {
      text: "Bookmarks",
      path: "/bookmarks",
      Component: Bookmarks,
      meta: {
        title: "MiniTwitter - Bookmarks",
        description: "Save your favorite items and they will appear here",
      },
    },
    {
      text: "List",
      path: "/list",
      Component: List,
      meta: {
        title: "MiniTwitter - List",
        description: "Pin your favorite lists to access them quickly",
      },
    },
  ],
};

const generateMeta = (meta) => {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
    </Helmet>
  );
};

export { routes as default, generateMeta };
