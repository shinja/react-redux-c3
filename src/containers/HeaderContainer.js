import { connect } from 'react-redux'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Header from 'components/Header'

// const mapStateToProps = (state) => ({
//   counter : state['counter'].cnt
// })

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(Header)
