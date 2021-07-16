import PropTypes from 'prop-types'
import { ViewPropTypes, ColorPropType } from 'react-native'

import selectInputPropTypes from '../AbstractSelectInput/types.js'

export default {
  ...selectInputPropTypes,
  backgroundColor: ColorPropType,
  dropdownIconColor: ColorPropType,
  mode: PropTypes.oneOf(['dialog', 'dropdown']),
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ])
}

export const defaultProps = {
  enabled: true,
  mode: 'dialog',
  options: [{ value: 0, label: '0' }],
  value: 0
}
