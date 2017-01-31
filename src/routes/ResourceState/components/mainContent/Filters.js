import React from 'react'
import applyEachSeries from 'async/applyEachSeries'
import CSSModules from 'react-css-modules'
import Select from 'components/Common/Select'
import ResourceCheckBox from 'components/Common/ResourceCheckBox'

import {
  FETCH_PERIODS_ASYNC,
  FETCH_RESOURCE_STATE_DATA_ASYNC,
  FILTER_PERIODS_START,
  FILTER_PERIODS_END,
  FILTER_RESOURCES
} from './../../modules/const'
import styles from './filters.cssmodule.scss'

class Filters extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      fetchSequence: [
        FETCH_PERIODS_ASYNC,
        FETCH_RESOURCE_STATE_DATA_ASYNC
      ]
    }
  }

  componentDidMount () {
    this.props[FETCH_RESOURCE_STATE_DATA_ASYNC] || this.fetchSequence(FETCH_PERIODS_ASYNC) // initialize selection options
  }

  fetchSequence = (asyncFilter) => {
    let props = this.props
    let fetchSequence = this.state.fetchSequence
    /* Calling fetch data asyncoriously by the sequence definition. */
    let fetchFns = fetchSequence.slice(fetchSequence.indexOf(asyncFilter)).map((fetch) => (args, callback) => props.rsFetch(fetch).then(callback))
    applyEachSeries(fetchFns, null, (err, rs) => {
      if (err) {
        console.log(err.stack)
      }
    })
  }

  onFilterChange = (filter, e) => {
    this.props.setFilter(filter, e.target.value)
  }

  render () {
    const periods = this.props[FETCH_PERIODS_ASYNC] || []

    const resources = this.props[FILTER_RESOURCES] || []
    const checkboxes = resources.map((resource, index) => {
      return (<ResourceCheckBox key={index} resource={resource} toggle={(res) => this.props.setFilter(FILTER_RESOURCES, res)} />)
    })

    return (
      <div>
        <div styleName='filterA'>
          <div styleName='filter-condition'>
            <label>Time Period:</label>
            <Select options={periods.map((period) => period['TimePeriod'])} value={this.props[FILTER_PERIODS_START]} onChange={(e) => {
              this.onFilterChange(FILTER_PERIODS_START, e)
            }} />
            <Select options={periods.map((period) => period['TimePeriod'])} value={this.props[FILTER_PERIODS_END]} onChange={(e) => {
              this.onFilterChange(FILTER_PERIODS_END, e)
            }} />
          </div>
        </div>
        <div styleName='filterB'>
          <ul>Resource: {checkboxes}</ul>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  rsFetch: React.PropTypes.func.isRequired,
  setFilter: React.PropTypes.func.isRequired
}

export default CSSModules(Filters, styles)
