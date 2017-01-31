import {
  connect
} from 'react-redux'
// import { actions } from '../modules/resourceStateReducer.js'
import actions from '../modules/actions.mock'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component */

import Main from '../components'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = actions

// get router state form global state object
const mapStateToProps = (state) => ({
  ...state['resource-state']
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
