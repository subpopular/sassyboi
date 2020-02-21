import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {github} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Link} from 'react-router-dom'
import {Box, Button, Text, Stack, Inline} from 'sassyboi'
import PropsTable from './PropsTable'

const DocLayout = ({children, meta, ...props}) => {
  const {name, description, component, inheritBoxProps} = meta

  return (
    <Stack space="xlarge" paddingBottom="xxlarge">
      <Stack>
        <Text heading size="xlarge">
          {name}
        </Text>
        <Text>{description}</Text>
      </Stack>

      <Stack space="xxlarge">
        {children && <Stack>{children}</Stack>}

        <Stack space="large">
          <Stack space="gutter">
            <Text weight="strong" size="large">
              Props
            </Text>
            {inheritBoxProps && (
              <Text>
                Inherits all{' '}
                <Text
                  as={Link}
                  tone="link"
                  to="/components/box"
                  baseline={false}
                >
                  Box props
                </Text>{' '}
                as well as the following:
              </Text>
            )}
          </Stack>
          <PropsTable component={component} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DocLayout
