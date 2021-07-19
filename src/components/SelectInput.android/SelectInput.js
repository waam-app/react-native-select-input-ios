import React from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import AbstractSelectInput from '../AbstractSelectInput'

import propTypes, { defaultProps } from './types.js'
import styles from './styles.js'

class SelectInput extends AbstractSelectInput {
  render() {
    const {
      enabled,
      labelStyle,
      mode,
      options,
      style,
      backgroundColor,
      dropdownIconColor,
      placeholder
    } = this.props
    const { selectedValue } = this.state

    return (
      <View style={style}>
        <Picker
          backgroundColor={backgroundColor}
          dropdownIconColor={dropdownIconColor}
          enabled={enabled}
          onValueChange={this.onSubmit}
          style={labelStyle || styles.defaultLabelStyle}
          selectedValue={selectedValue}
          mode={mode}
        >
          {!!placeholder && (
            <Picker.Item key={placeholder} value="" label={placeholder} />
          )}
          {options.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </Picker>
      </View>
    )
  }
}

SelectInput.propTypes = propTypes
SelectInput.defaultProps = defaultProps

export default SelectInput
