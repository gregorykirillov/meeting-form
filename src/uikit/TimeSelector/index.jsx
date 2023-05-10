import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import style from './style.module.scss'

const TimeSelector = ({ value, label, onTimeChange, ...props }) => {
  const ref = useRef()
  const handleTimeChange = (event) => {
    const timeValue = event.target.value
    onTimeChange(timeValue)
  }

  return (
    <div className={style.timeBlock}>
      <label htmlFor={ref}>{label}</label>
      <input
        id={ref}
        type="time"
        value={value}
        onChange={handleTimeChange}
        className={style.timeInput}
        required
        {...props}
      />
    </div>
  )
}

export default TimeSelector

TimeSelector.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onTimeChange: PropTypes.func.isRequired
}
