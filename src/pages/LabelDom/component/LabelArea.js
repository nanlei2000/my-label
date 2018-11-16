import React, { Component } from 'react'
import style from '../style/LabelArea.module.scss'
import { captureMouse } from '@/utils/'
export default class LabelArea extends Component {
  render() {
    return <div className={style.container} ref="container" />
  }
  initEvent() {
    this.refs.container.addEventListener('mousemove', function(evt) {
      let pos = captureMouse(evt, this)
      console.log(pos)
    })
  }
  componentDidMount() {
    this.initEvent()
  }
}
