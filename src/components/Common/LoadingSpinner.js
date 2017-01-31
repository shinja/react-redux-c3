import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './loading-spinner.cssmodule.scss'

const LoadingSpinner = () => (
  <div>
    <div styleName='loading' />
  </div>
)

LoadingSpinner.propTypes = {}

export default CSSModules(LoadingSpinner, styles)
