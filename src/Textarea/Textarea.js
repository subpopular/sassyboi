import React, {useState, useCallback, useEffect} from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import FieldMessage from '../FieldMessage/FieldMessage'
import './textarea.css'

const Input = ({
  label,
  className,
  rows = 3,
  message,
  tone,
  onChange,
  ...props
}) => {
  const [isEmpty, setIsEmpty] = useState(!props.value)

  const handleChange = useCallback(
    (e) => {
      if (e.target.value) {
        setIsEmpty(false)
      } else {
        setIsEmpty(true)
      }
      if (onChange) {
        onChange(e)
      }
    },
    [onChange]
  )

  useEffect(() => {
    if (props.value && isEmpty) {
      setIsEmpty(false)
    }
  }, [props.value, isEmpty, setIsEmpty])

  return (
    <Box
      className={cx(
        'u-input',
        'u-input--textarea',
        'u-input--outline',
        {
          'u-input--empty': isEmpty,
          [`u-input--tone-${tone}`]: tone,
        },
        className
      )}
    >
      <Text as="label" htmlFor={props.id || `input_${props.name}`} size="small">
        <span>{label || ' '}</span>
      </Text>

      <Box
        as="textarea"
        id={props.id || `input_${props.name}`}
        rows={rows}
        onChange={handleChange}
        {...props}
      />

      {message && (
        <FieldMessage tone={tone} message={message} marginTop="xsmall" />
      )}
    </Box>
  )
}

export default Input
