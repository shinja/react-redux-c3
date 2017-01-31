import React from 'react'
import CSSModules from 'react-css-modules'
import d3 from 'd3'
import styles from './contentheader.cssmodule.scss'

class ContentHeader extends React.Component {

  render () {
    const {
      billingData = {},
      filters
    } = this.props

    const total = filters.reduce((prev, filter) => {
      prev += (filter.checked ? billingData[filter.name] || 0 : 0)
      return prev
    }, 0)

    return (
      <div styleName='content-head'>
        <div styleName='arrow'>
          <span styleName='triangle-border' />
          <span styleName='triangle-inside' />
        </div>
        <h3>{billingData.TimePeriod || ''}</h3>
        <ul>
          <li><span>Total Amount:</span>{d3.format('$,')(parseFloat(total).toFixed(3))}</li>
        </ul>
      </div>
    )
  }
}

ContentHeader.propTypes = {
  billingData: React.PropTypes.object,
  filters: React.PropTypes.array
}

export default CSSModules(ContentHeader, styles)
