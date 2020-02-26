import React from 'react'
import {
  Box,
  Columns,
  Divider,
  Column,
  Text,
  Icon,
  Inline,
  Stack,
  tokens,
} from 'sassyboi'

const PropsTable = ({component}) => {
  const doc = component.__docgenInfo
  return (
    <Columns className="props-table">
      <Column span={1}>
        <Text tone="secondary">Name</Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary">Type</Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary">Responsive</Text>
      </Column>
      <Column span={1}>
        <Text tone="secondary">Description</Text>
      </Column>
      <Column span={4}>
        <Divider />
      </Column>

      {doc &&
        doc.props &&
        Object.keys(doc.props).map((propName) => {
          const prop = doc.props[propName]

          const propValues =
            prop.type &&
            prop.type.name !== 'union' &&
            (tokens[
              prop.type.value &&
                !Array.isArray(prop.type.value) &&
                prop.type.value.replace('types.', '').replace('tokens.', '')
            ] ||
              tokens[
                prop.type.raw &&
                  prop.type.raw.replace('types.', '').replace('tokens.', '')
              ] ||
              prop.type.value)

          const propOneOf =
            prop.type &&
            prop.type.name === 'union' &&
            prop.type.value.find((v) => v.name === 'arrayOf')

          return (
            <React.Fragment key={propName}>
              <Column span={1}>
                <Text weight="medium">{propName}</Text>
              </Column>
              <Column span={1}>
                {propValues ? (
                  <Box className="propCodes">
                    {propValues.map((val) => (
                      <Box
                        className="code"
                        key={`${propName}-${val.value || val}`}
                      >
                        <Text baseline={false}>
                          {val.value ? val.value.replace(/'/g, '') : val}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Text>
                    {prop.type && prop.type.name === 'union'
                      ? propOneOf
                        ? propOneOf.value.name
                        : prop.type.value.map((v) => v.name).join(', ')
                      : prop.type && prop.type.name}
                  </Text>
                )}
              </Column>
              <Column span={1}>
                {prop.type && (prop.type.name === 'custom' || propOneOf) ? (
                  <Box paddingLeft="gutter">
                    <Icon name="check" />
                  </Box>
                ) : null}
              </Column>
              <Column span={1}>
                <Stack space="xsmall">
                  {prop.description && <Text>{prop.description}</Text>}
                  {prop.defaultValue && (
                    <Inline space="xxsmall">
                      <Text>Default:</Text>{' '}
                      <Box className="code">
                        <Text baseline={false}>
                          {prop.defaultValue.value.replace(/'/g, '')}
                        </Text>
                      </Box>
                    </Inline>
                  )}
                </Stack>
              </Column>
              <Column span={4}>
                <Divider />
              </Column>
            </React.Fragment>
          )
        })}
    </Columns>
  )
}

export default PropsTable
