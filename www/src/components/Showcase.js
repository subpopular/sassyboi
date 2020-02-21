import React from 'react'
import {Box, Inline, Button, Stack, Text} from 'sassyboi'

const Showcase = ({children, playroomPath, ...props}) => {
  return (
    <Stack>
      {/* <Text size="large" weight="strong">
        Example
      </Text> */}
      <Stack space="xxsmall">
        <Box padding="large" boxShadow="borderStandard" {...props}>
          {children}
        </Box>
        <Inline>
          <Button
            as="a"
            href={`https://sassyboi-playground.netlify.com/${playroomPath}`}
            target="_blank"
            size="small"
            weight="strong"
            icon="share"
          >
            Open in Playroom
          </Button>
        </Inline>
      </Stack>
    </Stack>
  )
}

export default Showcase
