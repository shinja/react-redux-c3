import OUState from './components'

// Sync route definition
export default {
  // path: 'ou-state',
  // path: '/RequestCenter/custom/IAC/portlets/RunRateDashboard/index.html/ou-state',
  path: `${window.location.pathname}ou-state`,
  component: OUState
}
