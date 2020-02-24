import React from 'react'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import './field-message.css'

const FieldMessage = ({tone, message, ...props}) => {
  return (
    <Inline space="xsmall" {...props}>
      <Icon name={tone === 'critical' ? 'close' : 'check'} tone={tone} />
      <Text tone={tone}>{message}</Text>
    </Inline>
  )
}

export default FieldMessage
