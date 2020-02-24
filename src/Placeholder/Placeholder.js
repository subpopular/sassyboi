import React from 'react'
import Inline from '../Inline/Inline'
import './placeholder.css'

const Placeholder = ({height, width, text, ...props}) => {
  return (
    <Inline
      className="u-placeholder"
      background="subtle"
      justify="center"
      {...props}
      style={{width, height, padding: '0 12px'}}
    >
      {text}
    </Inline>
  )
}

export default Placeholder
