import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {github} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Link} from 'react-router-dom'
import {Box, Button, Text, Stack, Inline} from 'sassyboi'
import PropsTable from '../components/PropsTable'

const DocPage = ({name, description, playroomUrl, component}) => {
  return (
    <Stack space="xlarge">
      <Stack>
        <Text heading size="xlarge">
          {name}
        </Text>
        <Text>{description}</Text>
      </Stack>

      <Stack>
        <Text weight="strong" size="large">
          Usage
        </Text>
        <Inline space="small">
          <Box flexGrow={1}>
            <SyntaxHighlighter
              language="jsx"
              style={{
                ...github,
                hljs: {...github.hljs, padding: '9px 18px', lineHeight: '24px'},
              }}
            >{`import {${name}} from 'sassyboi'`}</SyntaxHighlighter>
          </Box>
          <Button as="a" href={playroomUrl} target="_blank" size="small">
            Open in Playroom
          </Button>
        </Inline>
      </Stack>

      <Stack space="large">
        <Text weight="strong" size="large">
          Props
        </Text>
        <PropsTable doc={component.__docgenInfo} />
      </Stack>
    </Stack>
  )
}

export default DocPage
