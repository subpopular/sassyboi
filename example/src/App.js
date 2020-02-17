import React, { useEffect } from 'react'
import {Box, Inline, Button, Stack, Text} from '@64labs/sassy'
import '@64labs/sassy/dist/index.css'
import sprite from './sprite.svg'

const App = () => {
  useEffect(() => {
    fetch(sprite)
      .then((response) => response.text())
      .then((text) => {
        const div = document.createElement('div')
        div.innerHTML = text
        div.hidden = true
        document.body.appendChild(div)
      })
  })

  return (
    <Stack padding="large" dividers>
      <Stack dividers>
        <Text size="xlarge" heading>XLarge</Text>
        <Text size="large" heading>Large</Text>
        <Text size="standard" heading>Standard</Text>
        <Text size="small" heading>Small</Text>
        <Text size="xsmall" heading>XSmall</Text>
      </Stack>
      <Stack dividers>
        <Text size="xlarge">XLarge</Text>
        <Text size="large">Large</Text>
        <Text size="standard">Standard</Text>
        <Text size="small">Small</Text>
        <Text size="xsmall">XSmall</Text>
      </Stack>
      <Inline dividers>
        <Button icon="search">Search</Button>
        <Text>I'm inline!</Text>
      </Inline>
    </Stack>
  )
}

export default App
