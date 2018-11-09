import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class Link extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const linkArr = [{ link: '/dom', char: 'LabelDom' }, { link: '/canvas', char: 'LabelCanvas' }]
    const { match } = this.props
    return linkArr.map((item, index) => {
      return (
        <Fragment key={item.link}>
          {index == 0 ? null : <br />}
          {match.path == item.link ? (
            <span>{item.char}</span>
          ) : (
            <NavLink to={item.link} activeStyle={{ color: 'red' }}>
              {item.char}
            </NavLink>
          )}
        </Fragment>
      )
    })
  }
}

export default withRouter(Link)
