import React, { Component } from 'react'
import Link from '@/component/Link'
import Layout from '@/component/Layout'
import LabelArea from './component/LabelArea'
export default class index extends Component {
  render() {
    return (
      <div>
        <Link />
        <Layout>
          <LabelArea />
        </Layout>
      </div>
    )
  }
}
