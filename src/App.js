import React, { memo } from 'react'

import { renderRoutes } from "react-router-config"

import routes from './router'

import MJAppheader from "@/components/app-header"
import MJAppFooter from "@/components/app-footer"
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <MJAppheader />
      {renderRoutes(routes)}
      <MJAppFooter />
    </HashRouter>
  )
})
