import MJDiscover from "@/pages/discover"
import MJFriend from "@/pages/friend"
import MJMine from "@/pages/mine"

const routes = [
  {
    path: "/",
    exact: true,
    component: MJDiscover
  },
  {
    path: "/mine",
    component: MJMine
  },
  {
    path: "/friend",
    component: MJFriend
  },
];

export default routes;