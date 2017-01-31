import React from 'react'
import CSSModules from 'react-css-modules'
import d3 from 'd3'
import styles from './index.cssmodule.scss'

import { FILTER_PERIOD_STATE_DATA,
    FILTER_RESOURCES,
    FILTER_FOCUS_BILLING_DATA_INDEX
} from '../../modules/const'
import Filters from './Filters'
import LoadingSpinner from 'components/Common/LoadingSpinner'
import ResourceBarChart from '../charts/ResourceBarChart'
import ContentHeader from './ContentHeader'

const MainContent = (props) => {
  const stateData = props[FILTER_PERIOD_STATE_DATA]
  const groups = props[FILTER_RESOURCES].filter((res) => res.checked).map((res) => res.name)

  const focusBillingData = stateData && stateData[props[FILTER_FOCUS_BILLING_DATA_INDEX]]

  const data = stateData && {
    columns: stateData.reduce((prev, state) => {
      prev.forEach((resourceStat) => resourceStat.push(state[resourceStat[0]] || 0))
      return prev
    }, groups.map((group) => [group])),

    onclick: (d, element) => {
      props.setFilter(FILTER_FOCUS_BILLING_DATA_INDEX, d.index)
    },
    groups: [groups]
  }

  const axis = {
    x: {
      label: {
        text: '(Month)',
        position: 'outer-top'
      },
      type: 'category',
      categories: stateData && stateData.map((state) => state['TimePeriod'])
    },
    y: {
      label: {
        text: '(Rate)',
        position: 'outer-top'
      },
      tick: {
        format: d3.format('$,')
        // format: function (d) { return "$" + d; }
      }
    }
  }

  return (
    <div styleName='neck'>
      <div styleName='main center'>
        <Filters {...props} />
        <div styleName='barchart-main'>
          {stateData && <ResourceBarChart data={data} stateData={stateData} axis={axis} filters={props[FILTER_RESOURCES]} /> || <LoadingSpinner />}
        </div>
        <ContentHeader billingData={focusBillingData} filters={props[FILTER_RESOURCES]} />
      </div>
    </div>
  )
}
export default CSSModules(MainContent, styles, { allowMultiple: true })
