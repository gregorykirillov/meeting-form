import React from 'react'
import PropTypes from 'prop-types'

import style from './style.module.scss'

const TimeSelector = ({ value, onTimeChange, ...props }) => {
  const handleTimeChange = (event) => {
    const timeValue = event.target.value
    onTimeChange(timeValue)
  }

  return (
    <input
      type="time"
      value={value}
      onChange={handleTimeChange}
      className={style.timeInput}
      required
      {...props}
    />
  )
}

export default TimeSelector

TimeSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onTimeChange: PropTypes.func.isRequired
}
