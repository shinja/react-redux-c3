import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './select.cssmodule.scss'

const Select = (props) => {
  let { options, ...rest } = props
  options = options || []

  return (
    <div styleName='selectWrap'>
      <select {...rest}>
        {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

Select.propTypes = {
  options: React.PropTypes.array
}

export default CSSModules(Select, styles)
