import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import style from './style.module.scss'

const RequiredInputWrapper = ({ defaultValue, children }) => {
  const [inputValue, setInputValue] = useState(children.props.value || '')

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue)
      return
    }

    setInputValue(children.props.value)
  }, [children.props.value])

  return (
    <div className={style.wrapper}>
      <input
        value={inputValue}
        required
        className={style.input}
        onChange={() => {}}
      />
      {children}
    </div>
  )
}

export default RequiredInputWrapper

RequiredInputWrapper.propTypes = {
  defaultValue: PropTypes.any,
  children: PropTypes.node.isRequired
}
