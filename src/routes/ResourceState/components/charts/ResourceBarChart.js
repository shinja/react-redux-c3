import React from 'react'
import C3Chart from 'react-c3js'
import _ from 'lodash'

import { RESOURCE_COLORS } from './const'

class ResourceBarChart extends React.Component {

  render () {
    const props = this.props

    const bar = {
      width: {
        ratio: 0.5
      }
    }

    const {
      data,
      filters,
      axis,
      ...rest
    } = props

    const grid = {
      y: {
        show: true
      }
    }

    const chartObj = this.refs.chart && this.refs.chart.chart
    if (chartObj) {
      let show = filters.filter((res) => res.checked).map((res) => res.name)
      let hide = filters.filter((res) => !res.checked).map((res) => res.name)
      chartObj.show(show)
      chartObj.hide(hide)
      // force reload categories
      chartObj.load({ categories: axis.x.categories })
    }

    return (<C3Chart ref='chart' {...rest} axis={axis} grid={grid} bar={bar}legend={{
      show: false
    }} data={_.assign({}, data, {
      type: 'line',
      colors: RESOURCE_COLORS,
      order: null
    })} />)
  }
}

export default ResourceBarChart
