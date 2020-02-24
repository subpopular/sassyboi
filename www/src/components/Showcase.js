import React from 'react'
import {Box, Divider, Inline, Button, Stack, Text} from 'sassyboi'

const Showcase = ({children, playroomPath, ...props}) => {
  return (
    <Stack>
      <Stack space="xsmall">
        <Divider />
        <Box paddingY="gutter" {...props}>
          {children}
        </Box>
        <Divider />

        <Inline>
          <Button
            as="a"
            href={`https://sassyboi-playground.netlify.com/${playroomPath}`}
            target="_blank"
            size="small"
            weight="weak"
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
