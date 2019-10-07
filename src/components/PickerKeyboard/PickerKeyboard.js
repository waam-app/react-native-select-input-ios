import React, { Component } from 'react'
import { Picker } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import CustomKeyboard from '../CustomKeyboard'

import propTypes from './types.js'
import styles from './styles.js'

class PickerKeyboard extends Component {
  constructor(props) {
    super(props)

    this.picker = null
    this.state = {
      value: props.value,
      visible: false
    }
  }

  setPickerRef = component => {
    this.picker = component
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state

    if (nextProps.value !== value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  focus() {
    this.setVisible(true)
  }

  onCancelPress = () => {
    const { onCancel } = this.props

    this.setVisible(false)
    onCancel && onCancel()
  }

  onSubmitPress = () => {
    const { onSubmit } = this.props
    const { value } = this.state

    this.setVisible(false)
    onSubmit && onSubmit(value)
  }

  onValueChange = value => {
    const { onValueChange } = this.props
    onValueChange && onValueChange(value)
    this.setState({
      value: value
    })
  }

  setVisible = visible => {
    this.setState({
      visible: visible
    })
  }

  render() {
    const {
      buttonsTextStyle,
      buttonsViewStyle,
      pickerItemStyle,
      pickerViewStyle,
      cancelKeyText,
      submitKeyText,
      options,
      dateMode,
      locale,
      maximumDate,
      minimumDate,
      timeZoneOffsetInMinutes,
      mode,
      minuteInterval
    } = this.props

    const { value, visible } = this.state

    return (
      <CustomKeyboard
        buttonsTextStyle={buttonsTextStyle}
        buttonsViewStyle={buttonsViewStyle}
        cancelKeyText={cancelKeyText}
        onCancelPress={this.onCancelPress}
        onSubmitPress={this.onSubmitPress}
        submitKeyText={submitKeyText}
        visible={visible}
      >
        {dateMode ? (
          <DateTimePicker
            value={value}
            display="default"
            onChange={(e, val) => this.onValueChange(val)}
            mode={mode}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            locale={locale}
            minuteInterval={minuteInterval}
          />
        ):(
          <Picker
            ref={this.setPickerRef}
            onValueChange={this.onValueChange}
            selectedValue={value}
            style={[styles.pickerview, pickerViewStyle]}
            itemStyle={pickerItemStyle}
          >
            {options.map(option => (
              <Picker.Item
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </Picker>
        )}
      </CustomKeyboard>
    )
  }
}

PickerKeyboard.propTypes = propTypes

export default PickerKeyboard