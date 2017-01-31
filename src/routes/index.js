// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
// import Home from './Home'
// import CounterRoute from './Counter'
import ResourceStateRoute from './ResourceState'
import OUState from './OUState'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  // path: '/',
  // path: '/RequestCenter/custom/IAC/portlets/RunRateDashboard/index.html',
  path: window.location.pathname,
  component: CoreLayout,
  indexRoute: ResourceStateRoute(store),
  childRoutes: [
    // CounterRoute(store),
    // ResourceStateRoute(store)
    OUState
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
