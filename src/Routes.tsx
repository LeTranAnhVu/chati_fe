import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import RouteWithLayout from './components/RouteWithLayout'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <RouteWithLayout exact path={`/rooms/:is`} component={Room} />
    <Redirect to="/rooms/12345" />
  </Switch>
)

export default Routes
