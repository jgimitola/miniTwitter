import { ReactComponent as HomeIcon } from "../images/home.svg";
import { ReactComponent as ExploreIcon } from "../images/explore.svg";
import { ReactComponent as MessagesIcon } from "../images/messages.svg";
import { ReactComponent as NotificationsIcon } from "../images/notifications.svg";
import { ReactComponent as BookmarkIcon } from "../images/bookmarks.svg";
import { ReactComponent as ListIcon } from "../images/list.svg";
import { ReactComponent as ProfileIcon } from "../images/profile.svg";
import { ReactComponent as MoreIcon } from "../images/more.svg";

const navButtons = [
  {
    SvgIcon: HomeIcon,
    buttonLabel: "Home",
    linkTo: "/home",
  },
  {
    SvgIcon: ExploreIcon,
    buttonLabel: "Explore",
    linkTo: "/explore",
  },
  {
    SvgIcon: NotificationsIcon,
    buttonLabel: "Notifications",
    linkTo: "/notifications",
  },
  {
    SvgIcon: MessagesIcon,
    buttonLabel: "Messages",
    linkTo: "/messages",
  },
  {
    SvgIcon: BookmarkIcon,
    buttonLabel: "Bookmarks",
    linkTo: "/bookmarks",
  },
  {
    SvgIcon: ListIcon,
    buttonLabel: "List",
    linkTo: "/list",
  },
  {
    SvgIcon: ProfileIcon,
    buttonLabel: "Profile",
    linkTo: "/profile",
  },
  {
    SvgIcon: MoreIcon,
    buttonLabel: "More",
    linkTo: "/home",
  },
];

export default navButtons;
