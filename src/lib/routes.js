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

const routes = {
  unrestricted: [
    {
      text: "🐦 miniTwitter",
      path: "/",
      component: Root,
      meta: {
        title: "MiniTwitter",
        description: "MiniTwitter is a clon Twitter clon page",
      },
    },
    {
      text: "Log In",
      path: "/login",
      component: Login,
      meta: {
        title: "MiniTwitter - Login",
        description: "Log in to your MiniTwitter account",
      },
    },
    {
      text: "Sign Up",
      path: "/signup",
      component: SignUp,
      meta: {
        title: "MiniTwitter - Register",
        description: "Create your MiniTwitter account",
      },
    },
    {
      text: "Password Recovery",
      path: "/passwordrecovery",
      component: PasswordRecovery,
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
      component: Home,
      meta: {
        title: "MiniTwitter - Home",
        description:
          "Watch what is happening now. Read stories all around the world",
      },
    },
    {
      text: "Profile",
      path: "/profile",
      component: Profile,
      meta: {
        title: "MiniTwitter - Profile",
        description: "Your profile in MiniTwitter",
      },
    },
    {
      text: "TimeLine",
      path: "/timeline/:user",
      component: Timeline,
      meta: {
        title: "",
        description: "",
      },
    },
    {
      text: "Search Result",
      path: "/search/results",
      component: SearchResult,
      meta: {
        title: "MiniTwitter - Search Results",
        description: "Results for search criteria",
      },
    },
    {
      text: "Tweet",
      path: "/tweets/:id",
      component: Tweet,
      meta: {
        title: "MiniTwitter - Tweet",
        description: "Basic Tweet description",
      },
    },
    {
      text: "Trending Topic",
      path: "/trending/:topic",
      component: Trend,
      meta: {
        title: "MiniTwitter - Trending",
        description: "Topic is trending on MiniTwitter, take a look",
      },
    },
  ],
};

const generateMeta = (path) => {
  const restricted = routes.restricted;
  const unrestricted = routes.unrestricted;

  let found = restricted.find((route) => route.path === path);
  found = !found ? unrestricted.find((route) => route.path === path) : found;

  if (found) {
    let meta = found.meta;

    return [
      <title>{meta.title}</title>,
      <meta name="description" content={meta.description} />,
      <meta property="og:title" content={meta.title} />,
      <meta property="og:description" content={meta.description} />,
    ];
  } else {
    console.log("Invalid path");
    return [];
  }
};

export { routes as default, generateMeta };
