import {
  FETCH_PERIODS_ASYNC,
  FETCH_RESOURCE_STATE_DATA_ASYNC
} from './const'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

const getPeriodsAsync = (dispatch, getState, resolve) => {
  let payload = {
    'totalCount': 20,
    'items': [{
      'TimePeriod': 'Jan-2017'
    }, {
      'TimePeriod': 'Dec-2016'
    }, {
      'TimePeriod': 'Nov-2016'
    }, {
      'TimePeriod': 'Oct-2016'
    }, {
      'TimePeriod': 'Sep-2016'
    }, {
      'TimePeriod': 'Aug-2016'
    }, {
      'TimePeriod': 'Jul-2016'
    }, {
      'TimePeriod': 'Jun-2016'
    }, {
      'TimePeriod': 'May-2016'
    }, {
      'TimePeriod': 'Apr-2016'
    }, {
      'TimePeriod': 'Mar-2016'
    }, {
      'TimePeriod': 'Feb-2016'
    }, {
      'TimePeriod': 'Jan-2016'
    }, {
      'TimePeriod': 'Dec-2015'
    }, {
      'TimePeriod': 'Nov-2015'
    }, {
      'TimePeriod': 'Oct-2015'
    }, {
      'TimePeriod': 'Sep-2015'
    }, {
      'TimePeriod': 'Aug-2015'
    }, {
      'TimePeriod': 'Jul-2015'
    }, {
      'TimePeriod': 'Jun-2015'
    }]
  }
  setTimeout(() => {
    dispatch({
      type: FETCH_PERIODS_ASYNC,
      payload
    })
    resolve()
  }, 20)
}

const getResourceStateData = (dispatch, getState, resolve) => {
  let payload = {
    'totalCount': 38,
    'items': [{
      'TimePeriod': 'Jan-2017',
      'CPU': 103.679,
      'RAM': 11.818,
      'Disk': 9274.913,
    }, {
      'TimePeriod': 'Dec-2016',
    }, {
      'TimePeriod': 'Nov-2016',
    }, {
      'TimePeriod': 'Oct-2016',
    }, {
      'TimePeriod': 'Sep-2016',
    }, {
      'TimePeriod': 'Aug-2016',
      'CPU': 23646.075,
      'RAM': 81694.985,
      'Disk': 25788.433,
    }, {
      'TimePeriod': 'Aug-2016',
      'CPU': 2147.966,
      'RAM': 6086.141,
      'Disk': 2493.443,
    }, {
      'TimePeriod': 'Nov-2015',
      'CPU': 23434.118,
      'RAM': 70578.562,
      'Disk': 32831.213,
    }, {
      'TimePeriod': 'Oct-2015',
      'CPU': 24955.746,
      'RAM': 74671.132,
      'Disk': 33750.414,
    }, {
      'TimePeriod': 'Sep-2015',
      'CPU': 25005.849,
      'RAM': 73830.011,
      'Disk': 33309.035,
    }, {
      'TimePeriod': 'Aug-2015',
      'CPU': 26694.235,
      'RAM': 78673.066,
      'Disk': 34532.667,
    }, {
      'TimePeriod': 'Jul-2015',
      'CPU': 27782.282,
      'RAM': 78831.752,
      'Disk': 35616.103,
    }, {
      'TimePeriod': 'Jun-2015',
      'CPU': 31119.901,
      'RAM': 86689.24,
      'Disk': 36565.582,
    }]
  }

  /* Clear all fetched stat data */
  dispatch({
    type: FETCH_RESOURCE_STATE_DATA_ASYNC,
    payload: {}
  })
  setTimeout(() => {
    dispatch({
      type: FETCH_RESOURCE_STATE_DATA_ASYNC,
      payload
    })
    resolve()
  }, 10)
}

const asyncActions = {
  [FETCH_PERIODS_ASYNC]: getPeriodsAsync,
  [FETCH_RESOURCE_STATE_DATA_ASYNC]: getResourceStateData
}

export const rsFetch = (type) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      asyncActions[type](dispatch, getState, resolve)
    })
  }
}

const actions = {
  rsFetch,
  setFilter: (filter, data) => {
    return {
      type: filter,
      payload: data
    }
  }
}

export default actions
