import 'focus-visible'
import React from 'react'
import {render} from 'react-dom'
import {MDXProvider} from '@mdx-js/react'
import {
  Box,
  Columns,
  ContentBlock,
  Column,
  Divider,
  Stack,
  Text,
  Icon,
  Inline,
  VerticalDivider,
  ScrollBox,
  SassyboiProvider,
} from 'sassyboi'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import DocLayout from './components/DocLayout'
import ComponentRoutes from './components/ComponentRoutes'
import styles from './index.css'
import calc from 'postcss-calc'

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
  'VerticalDivider',
  'Textarea',
]

const svgIcons = require.context('sassyboi/dist/icons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

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
    <SassyboiProvider styles={styles}>
      <Router>
        <Box paddingY="gutter" paddingX="gutter">
          <Inline justify="space-between">
            <Text heading weight="strong" size="standard" as={Link} to="/">
              Sassyboi
            </Text>

            <Icon name="github" />
          </Inline>
        </Box>

        <Divider />

        <Columns cols={6} gap="none" align="stretch">
          <Column span={1}>
            <Box display="flex" height="full">
              <Box style={{flex: 1}}>
                <ScrollBox scrollY style={{height: 'calc(100vh - 76px)'}}>
                  <Navigation pages={docPages} />
                </ScrollBox>
              </Box>
              <VerticalDivider />
            </Box>
          </Column>

          <Column span={5}>
            <ScrollBox scrollY style={{height: 'calc(100vh - 76px)'}}>
              <ContentBlock width="medium">
                <Switch>
                  <MDXProvider components={mdxComponents}>
                    <Route path="/components/:componentName">
                      <ComponentRoutes />
                    </Route>
                  </MDXProvider>
                </Switch>
              </ContentBlock>
            </ScrollBox>
          </Column>
        </Columns>
      </Router>
    </SassyboiProvider>
  )
}

var mountNode = document.getElementById('app')
render(<App />, mountNode)
