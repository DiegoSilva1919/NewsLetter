import React from 'react'
import './alertErro.sass'

const AlertErro = ({ showError }) => {
  return showError ? <p id="alert">Valid email required</p> : null
}

export default AlertErro
