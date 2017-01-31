import React from 'react'
import CSSModules from 'react-css-modules'
import d3 from 'd3'
import styles from './index.cssmodule.scss'

import { RESOURCE_COLORS } from '../../components/charts/const'

import {
  FILTER_RESOURCES,
  FILTER_PERIOD_STATE_DATA,
  FILTER_FOCUS_BILLING_DATA_INDEX
} from '../../modules/const'

import DonutChartBox from './DonutChartBox'

const SubContent = (props) => {
  const filters = props[FILTER_RESOURCES]
  const focusBillingData = props[FILTER_PERIOD_STATE_DATA] && [props[FILTER_PERIOD_STATE_DATA][props[FILTER_FOCUS_BILLING_DATA_INDEX]]]

  return (
    <div styleName='content center'>
      <article>

        <DonutChartBox title={'Resource Stats'} filters={filters} stateData={focusBillingData} labels={focusBillingData && filters.filter((filter) => filter.checked).map((filter) => {
          const billing = focusBillingData[0]
          return {
            color: RESOURCE_COLORS[filter.name],
            title: filter.name,
            total: d3.format('$,')(billing[filter.name] || 0)
          }
        })} data={{
          json: focusBillingData,
          colors: RESOURCE_COLORS,
          keys: {
            value: filters.map(filter => filter.name)
          }
        }} />
      </article>

    </div>
  )
}

export default CSSModules(SubContent, styles, { allowMultiple: true })
