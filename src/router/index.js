import React from "react"

import MJDiscover from "@/pages/discover/"
import MJFriend from "@/pages/friend"
import MJMine from "@/pages/mine"

import MJRecommend from "@/pages/discover/c-pages/recommend"
import MJAlbum from "@/pages/discover/c-pages/album"
import MJArtist from "@/pages/discover/c-pages/artist"
import MJDiantai from "@/pages/discover/c-pages/diantai"
import MJRanking from "@/pages/discover/c-pages/ranking"
import MJSong from "@/pages/discover/c-pages/song"
import MJPlayer from "@/pages/player"

import { Redirect } from "react-router-dom"


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discovery"/>
    )
  },
  {
    path: "/discovery",
    component: MJDiscover,
    routes: [
      {
        path: "/discovery",
        exact: true,
        render: () => (
          <Redirect to="/discovery/recommend"/>
        )
      },
      {
        path: "/discovery/recommend",
        component: MJRecommend,
      },
      {
        path: "/discovery/album",
        component: MJAlbum,
      },
      {
        path: "/discovery/artist",
        component: MJArtist,
      },
      {
        path: "/discovery/diantai",
        component: MJDiantai,
      },
      {
        path: "/discovery/toplist",
        component: MJRanking,
      },
      {
        path: "/discovery/playlist",
        component: MJSong,
      },
      {
        path: "/discovery/player",
        component: MJPlayer,
      }
    ]
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