import React, { Component } from 'react'
import styles from '@/style/Layout.module.scss'
export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className={styles.wrapper}>{this.props.children}</div>
  }
}
