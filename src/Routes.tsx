import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import RouteWithLayout from './components/RouteWithLayout'
import Page404 from './pages/Page404'
import { DEFAULT_ROOM } from './types'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <RouteWithLayout exact path="/rooms/:id" component={Room} />
    <Route exact path="/not-found" component={Page404} />
    <Redirect from="/rooms" to={`/rooms/${DEFAULT_ROOM}`} />
    <Redirect to="/not-found" />
  </Switch>
)

export default Routes
