import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './donutchartbox.cssmodule.scss'

import LoadingSpinner from 'components/Common/LoadingSpinner'
import ResourceDonutChart from '../charts/ResourceDonutChart'

const DonutChartBox = (props) => {
  const {
    title,
    labels,
    stateData,
    ...rest
  } = props

  const donutChart = stateData && (
    <div styleName='SVGBox'>
        {stateData.length > 0 ? <ResourceDonutChart {...rest} /> : 'No Available Data.'}
    </div>
  )

  const labelTable = labels && (
    <div styleName='InfoBox'>
      <table>
        <tbody>
          {labels.map((label, index) => {
            return (
              <tr key={index}>
                <td><span style={{
                  backgroundColor: label.color
                }} /></td>
                <td>{label.title}</td>
                <td styleName='Totalamount'>{label.total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  return (
    <section styleName='section dountChart'>
      <div styleName='chartHead'>{title}</div>
      <div styleName='barchart-sub'>
        {donutChart || <LoadingSpinner />}
        {labelTable}
      </div>
    </section>
  )
}

DonutChartBox.propTypes = {
  title: React.PropTypes.string,
  labels: React.PropTypes.array,
  stateData: React.PropTypes.array
}

export default CSSModules(DonutChartBox, styles, { allowMultiple: true })
