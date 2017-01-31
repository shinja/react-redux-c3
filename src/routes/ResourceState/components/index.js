import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.cssmodule.scss'

import MainContent from './mainContent'
import SubContent from './subContent'

class RunRateDashboardApp extends React.Component {

  render () {
    var props = this.props
    return (
      <div>
        <MainContent {...props} />
        <SubContent {...props} />
      </div>
    )
  }
}

export default CSSModules(RunRateDashboardApp, styles)
