import React, {useEffect} from 'react'
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
} from 'sassyboi'
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import 'sassyboi/dist/index.css'
import sprite from './sprite.svg'
import DocPage from './components/DocPage'

const docPages = [
  {
    name: 'Box',
    path: '/box',
    component: Box,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8AhCAPABAIwIZgGsBzAJwgFcA7KAXgB0QBnGSa3EgTwcwAdcooAS0pEawANoByRgFtcAG3mSANJkkyYQ8jJVr06eeyIxJAXQC+APjqVMmJAAVDYGAAsI82CUyuYgoq4ALmIAjAAMYeYA9NaUSFFo6LEgyiAA7oJQga6MCOIAzADsAKzKhQBsABzK4QBMACwWQA',
    description:
      'The Box component is the foundation for all other components.',
  },
  {
    name: 'Stack',
    path: '/stack',
    component: Stack,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8BlALgQzAawAQGcAHLGAXmAG0AdEfAWwwBtGaAaXGumKASwFc6bDiEYYATgHMYNALoBfXMSi8AdhNI1Rk6SAB8VFblxIACqLAwAFhEawxuSzB4TLacgFYADAoD0+w8ZmJNa2MPaOzq4e3rh+Bkam5lY2dg5OLm7AXr7+SD7oWNj+IKwgAO48UGiW+AgUAMwA7O6sjQBsABysAIyeAEwALPJAA',
    description: 'Vertically stacks elements.',
    inheritBoxProps: true,
  },
  {
    name: 'Inline',
    path: '/inline',
    component: Inline,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8BJAdgGwJZpgAgGcAHAQzBgF5gBtAHRAIFsSMN6AaPexmKLAV0YcuIDCQBOAcxj0AugF8AfLTR48SAApjyACwgZY4vDphZJOgC5UArAAZ5eAPTLV6rWRh6DMIybOWbeycXNU1tT31DY1NzK2A7B2cVJEd0bFwXEHYQAHcsKAsdAgRqAGYAdmt2coA2AA52AEZbACYAFgUgA',
    description: 'Place elements in a row.',
    inheritBoxProps: true,
  },
  {
    name: 'Columns',
    path: '/columns',
    component: Columns,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8BhCAbArgWwHYGcACSdfAXmADYBfQgBwEMooBLXAczIB0R0GAndjB4A+LrkKFUGHBPyNcFANoBmADSEAjAF1qYiZKkAFPmBgALDLH6FzMFu3MAXCgFYADLQD0+yUi9oWHi+UoGyhPIMisCqGgAsuiF+JgxmlujWtvaOLsAe3iH+YcHifsVyCsqUGjp6pYZIKWlWMDZ2Ds5unoQ+9UUyJbj9QQT6IGogAO4sUE7m+AiqAOyuakuUABxqmu4ATAnUQA',
    description: 'Render elements in columns with CSS grid.',
    inheritBoxProps: true,
  },
  {
    name: 'Column',
    path: '/column',
    component: Column,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8BhCAbArgWwHYGcACSdfAXmADYBfQgBwEMooBLXAczIB0R0GAndjB4A+LrkKFUGHBPyNcFANoBmADSEAjAF1qYiZKkAFPmBgALDLH6FzMFu3MAXCgFYADLQD0+yUi9oWHi+UoGyhPIMisCqGgAsuiF+JgxmlujWtvaOLsAe3iH+YcHifsVyCsqUGjp6pYZIKWlWMDZ2Ds5unoQ+9UUyJbj9QQT6IGogAO4sUE7m+AiqAOyuakuUABxqmu4ATAnUQA',
    description: 'Control the column span inside Columns',
    inheritBoxProps: true,
  },
  {
    name: 'Button',
    path: '/button',
    component: Button,
    playroomUrl:
      'https://sassyboi-playground.netlify.com/#?code=N4Igxg9gJgpiBcIA8BJAdgGwJZpgAgAcBDKKHAcwF4AdEDIgJ3JloD5q088kAhAVwAuAiGlYAFBjADOUvAFkYSAPT8hI9p26rhnAO4ws5ABYCaIKQIYjybCdNkLl29Ry69BOvPsMmz+ogDWtpIy8ooqHi5oyujYuBogADQgulhQAkZSCADaAOwAbAAcALoAvkA',
    description: "Everybody's got one",
    inheritBoxProps: true,
  },
]

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
    <Router>
      <Box paddingX="gutter" paddingY="medium">
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
              <Stack as="nav">
                <Text weight="strong">Components</Text>
                <Stack as="ul">
                  {docPages.map((page) => (
                    <li key={page.path}>
                      <Text as={Link} to={page.path} block>
                        {page.name}
                      </Text>
                    </li>
                  ))}
                </Stack>
              </Stack>
            </Column>

            <Column span={4}>
              <Switch>
                {docPages.map((page) => (
                  <DocPage {...page} key={page.path} />
                ))}
              </Switch>
            </Column>
          </Columns>
        </ContentBlock>
      </Stack>
    </Router>
  )
}

export default App
