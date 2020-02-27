import 'focus-visible'
import React, {useEffect} from 'react'
import {render} from 'react-dom'
import {MDXProvider} from '@mdx-js/react'
import {
  Box,
  Columns,
  ContentBlock,
  Column,
  Divider,
  Inline,
  Button,
  Stack,
  Text,
  Icon,
  Image,
  ScrollBox,
} from 'sassyboi'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {ThemeProvider} from './util/ThemeContext'
import DocLayout from './components/DocLayout'
import ComponentRoutes from './components/ComponentRoutes'

import './index.css'

const theme = {}

const docPages = [
  'Box',
  'Button',
  'Checkbox',
  'Columns',
  'Column',
  'ContentBlock',
  'Icon',
  'Image',
  'Inline',
  'Input',
  'Radio',
  'ScrollBox',
  'Stack',
  'Select',
  'Text',
]

const mdxComponents = {
  wrapper: DocLayout,
  h1: (props) => <Text heading as="h1" size="xlarge" {...props} />,
  h2: (props) => <Text as="h2" weight="strong" size="large" {...props} />,
  h3: (props) => <Text as="h3" weight="strong" size="standard" {...props} />,
  h4: (props) => <Text as="h4" size="standard" weight="medium" {...props} />,
  h5: (props) => <Text heading as="h5" size="small" {...props} />,
  h6: (props) => <Text heading as="h6" size="xsmall" {...props} />,
  p: (props) => <Text {...props} />,
  li: (props) => <Text as="li" {...props} />,
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box paddingY="medium">
          <ContentBlock>
            <Text heading size="standard">
              Sassyboi Docs
            </Text>
          </ContentBlock>
        </Box>

        <Stack space="large">
          <Divider />

          <ContentBlock>
            <Columns cols={5} gap="xlarge">
              <Column span={1}>
                <Stack space="large" dividers>
                  {/* <Stack as="nav">
                  <Text weight="strong">Get Started</Text>
                  <Stack as="ul">
                    <li>
                      <Text as={Link} to="/motivation" block>
                        Motivation
                      </Text>
                    </li>
                  </Stack>
                </Stack> */}

                  <Stack as="nav">
                    <Text weight="strong">Components</Text>
                    <Stack as="ul">
                      {docPages.map((page) => (
                        <li key={page}>
                          <Text
                            as={Link}
                            to={`/components/${page.toLowerCase()}`}
                            block
                          >
                            {page}
                          </Text>
                        </li>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Column>

              <Column span={4}>
                <Switch>
                  <MDXProvider components={mdxComponents}>
                    <Route path="/components/:componentName">
                      <ComponentRoutes />
                    </Route>
                  </MDXProvider>
                </Switch>
              </Column>
            </Columns>
          </ContentBlock>
        </Stack>
      </Router>
    </ThemeProvider>
  )
}

fetch('https://unpkg.com/feather-icons@4.26.0/dist/feather-sprite.svg')
  .then((response) => response.text())
  .then((text) => {
    const div = document.createElement('div')
    div.innerHTML = text
    div.hidden = true
    document.body.insertBefore(div, document.body.childNodes[0])
  })

var mountNode = document.getElementById('app')
render(<App />, mountNode)
