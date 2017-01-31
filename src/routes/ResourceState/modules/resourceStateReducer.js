// ------------------------------------
// Constants
// ------------------------------------

import {
  FETCH_PERIODS_ASYNC,
  FETCH_RESOURCE_STATE_DATA_ASYNC,
  FILTER_PERIODS_START,
  FILTER_PERIODS_END,
  FILTER_RESOURCES,
  FILTER_PERIOD_STATE_DATA,
  FILTER_FOCUS_BILLING_DATA_INDEX,
  FILTER_CURRENT_BILLING_DATA
} from './const'

import {
  filterByPeriod
} from './BillingStatFilter'

import _ from 'lodash'
// ------------------------------------
// Action Handlers, return an overwriteing object
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_PERIODS_ASYNC]: (state, action) => {
    const items = action.payload.items
    return {
      [FETCH_PERIODS_ASYNC]: items,
      [FILTER_PERIODS_START]: items.length > 0 ? items[items.length - 1]['TimePeriod'] : '',
      [FILTER_PERIODS_END]: items.length > 0 ? items[0]['TimePeriod'] : ''
    }
  },
  [FETCH_RESOURCE_STATE_DATA_ASYNC]: (state, action) => {
    const items = action.payload.items
    const periodStat = items && filterByPeriod(items, state[FILTER_PERIODS_START], state[FILTER_PERIODS_END])
    const current = periodStat && periodStat[periodStat.length - 1]
    return {
      [FETCH_RESOURCE_STATE_DATA_ASYNC]: items,
      [FILTER_PERIOD_STATE_DATA]: periodStat,
      [FILTER_FOCUS_BILLING_DATA_INDEX]: periodStat && periodStat.indexOf(current),
      [FILTER_CURRENT_BILLING_DATA]: current
    }
  },
  /* Filter actions */
  [FILTER_RESOURCES]: (state, action) => {
    return {
      [FILTER_RESOURCES]: state[FILTER_RESOURCES].map((res) => res.name === action.payload ? {
        ...res,
        checked: !res.checked
      } : res)
    }
  },
  [FILTER_PERIODS_START]: (state, action) => {
    const periodStatData = filterByPeriod(state[FETCH_RESOURCE_STATE_DATA_ASYNC], action.payload, state[FILTER_PERIODS_END])
    return {
      [FILTER_PERIODS_START]: action.payload,
      [FILTER_FOCUS_BILLING_DATA_INDEX]: periodStatData.length - 1,
      [FILTER_PERIOD_STATE_DATA]: periodStatData
    }
  },
  [FILTER_PERIODS_END]: (state, action) => {
    const periodStatData = filterByPeriod(state[FETCH_RESOURCE_STATE_DATA_ASYNC], state[FILTER_PERIODS_START], action.payload)
    return {
      [FILTER_PERIODS_END]: action.payload,
      [FILTER_FOCUS_BILLING_DATA_INDEX]: periodStatData.length - 1,
      [FILTER_PERIOD_STATE_DATA]: periodStatData
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  [FILTER_RESOURCES]: [{
    name: 'CPU',
    checked: true
  }, {
    name: 'RAM',
    checked: true
  }, {
    name: 'Disk',
    checked: true
  }]
}

export default function resourceStateReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return _.assign({}, state, handler && handler(state, action) || {
    [action.type]: action.payload
  })
}
