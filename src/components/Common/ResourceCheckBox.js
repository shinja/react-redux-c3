import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './resourcecheckbox.cssmodule.scss'

const ResourceCheckBox = ({ resource, toggle }) => (
  <li styleName='li'>
    <span styleName={resource.name.toUpperCase()} onClick={() => toggle(resource.name)}>
      <i className='fa fa-check' styleName={!resource.checked && 'UnSelected'} aria-hidden='true' />
    </span>
    {resource.name.toUpperCase()}
  </li>
)

ResourceCheckBox.propTypes = {
  resource: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func
}

export default CSSModules(ResourceCheckBox, styles)
