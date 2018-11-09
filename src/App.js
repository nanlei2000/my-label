import React, { Component } from 'react'
import LabelDom from '@/pages/LabelDom'
import LabelCanvas from '@/pages/LabelCanvas'
import { Route, Redirect, Switch } from 'react-router-dom'
export default class App extends Component {
  render() {
    return <LabelDom />
  }
}
