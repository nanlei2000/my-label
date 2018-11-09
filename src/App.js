import React, { Component } from 'react'
import LabelDom from '@/pages/LabelDom'
import LabelCanvas from '@/pages/LabelCanvas'
import Home from '@/pages/Home'
import { Route, Redirect, Switch } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dom" component={LabelDom} />
        <Route path="/canvas" component={LabelCanvas} />
        <Redirect from="*" to="/" />
      </Switch>
    )
  }
}
