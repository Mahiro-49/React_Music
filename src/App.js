import React, { memo } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from "react-router-config"

import routes from './router'
import store from './store'

import MJAppheader from "@/components/app-header"
import MJAppFooter from "@/components/app-footer"
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MJAppheader />
        {renderRoutes(routes)}
        <MJAppFooter />
      </HashRouter>
    </Provider>

  )
})
