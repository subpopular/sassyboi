import React from 'react'
import {Box, Columns, Divider, Column, Text, Inline} from 'sassyboi'

const PropsTable = ({doc}) => {
  console.log(doc)
  return (
    <Columns className="props-table" rowGap="none" columnGap="medium">
      {doc &&
        doc.props &&
        Object.keys(doc.props).map((propName) => {
          const prop = doc.props[propName]
          return (
            <React.Fragment>
              <Column span={1}>
                <Text weight="medium">{propName}</Text>
              </Column>
              <Column span={1}>
                {prop.type &&
                  (prop.type.value ? (
                    <Box className="propCodes">
                      {prop.type.value.map((val) => (
                        <Box className="code">
                          <Text baseline={false}>
                            {val.value.replace(/'/g, '')}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Text>{prop.type.name}</Text>
                  ))}
              </Column>
              <Column span={1}>
                <Text>{prop.required ? 'Required' : 'Optional'}</Text>
              </Column>
              <Column span={1}>
                <Text>{prop.description}</Text>
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
