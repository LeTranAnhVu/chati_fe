import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Room from './pages/Room'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Home} />
    <Route exact path="/rooms/:id" component={Room} />
    <Redirect to="/rooms/12345" />
  </Switch>
)

export default Routes
