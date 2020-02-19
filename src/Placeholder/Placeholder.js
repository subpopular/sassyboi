import React from 'react'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'

const Placeholder = ({height, width, ...props}) => {
  return (
    <Inline
      className="u-placeholder"
      background="subtle"
      justify="center"
      {...props}
      style={{width, height}}
    >
      <Text>Placeholder</Text>
    </Inline>
  )
}

export default Placeholder
