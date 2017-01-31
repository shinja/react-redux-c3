import React from 'react'
import CSSModules from 'react-css-modules'

import HeaderContainer from '../../containers/HeaderContainer'
import styles from './CoreLayout.cssmodule.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (

  <div styleName='NewMyRunRate'>
    <HeaderContainer />
    <div> {children} </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CSSModules(CoreLayout, styles)
