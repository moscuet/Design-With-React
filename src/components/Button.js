import React from 'react'

// buttonClass option: button (common), button_read, button_started
const Button = props => (
   <button className= {props.buttonClass}>{props.text}</button> 
)
export default Button