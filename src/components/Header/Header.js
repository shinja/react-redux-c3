import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './header.cssmodule.scss'

const Header = (props) => {
  return (
    <header styleName='header center'>
        <h2>Resource Usage Analysis</h2>
    </header>
  )
}

Header.propTypes = {
  'resource-state': React.PropTypes.object
}

export default CSSModules(Header, styles, { allowMultiple: true })
