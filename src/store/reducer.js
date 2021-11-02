import { combineReducers } from "redux-immutable"

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store"

import { reducer as playerReducer } from "../pages/player/store"

import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store"

import { reducer as SongReducer } from "../pages/discover/c-pages/song/store"

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  song: SongReducer
})

export default cReducer;