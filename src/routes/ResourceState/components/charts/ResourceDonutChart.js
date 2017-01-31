import React from 'react'
import C3Chart from 'react-c3js'
import _ from 'lodash'

import { DEFAULT_COLORS } from './const'

class ResourceDonutChart extends React.Component {

  render () {
    const {
      data,
      filters,
      ...rest
    } = this.props

    const size = {
      width: 200,
      height: 200
    }

    const chartObj = this.refs.chart && this.refs.chart.chart
    if (chartObj && filters) {
      let show = filters.filter((res) => res.checked).map((res) => res.name)
      let hide = filters.filter((res) => !res.checked).map((res) => res.name)
      chartObj.show(show)
      chartObj.hide(hide)
    }

    return (<C3Chart ref='chart' {...rest} size={size} color={{ pattern: DEFAULT_COLORS }} data={_.assign({}, data, { type: 'donut' })} legend={{
      show: false,
      position: 'right'
    }} />)
  }
}

ResourceDonutChart.propTypes = {
  data: React.PropTypes.object.isRequired,
  filters: React.PropTypes.array
}

export default ResourceDonutChart
