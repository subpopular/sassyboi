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
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import 'sassyboi/dist/index.css'
import sprite from './sprite.svg'
import DocPage from './components/DocPage'

const docPages = [
  {
    name: 'Box',
    path: '/box',
    component: Box,
    playroomUrl:
      'http://localhost:9000/#?code=N4Igxg9gJgpiBcIA8AhCAPABAIwIZgGsBzAJwgFcA7KAXgB0QBnGSa3EgTwcwAdcooAS0pEawANoByRgFtcAG3mSANJkkyYQ8jJVr06eeyIxJAXQC+APjqVMmJAAVDYGAAsI82CUyuYgoq4ALmIAjAAMYeYA9NaUSFFo6LEgyiAA7oJQga6MCOIAzADsAKzKhQBsABzK4QBMACwWQA',
    description:
      'The Box component is the foundation for all other components.',
  },
  {
    name: 'Stack',
    path: '/stack',
    component: Stack,
    playroomUrl: '',
    description: 'Vertically stacks elements.',
  },
  {
    name: 'Inline',
    path: '/inline',
    component: Inline,
    playroomUrl: '',
    description: 'Place elements in a row with optional wrapping.',
  },
  {
    name: 'Button',
    path: '/button',
    component: Button,
    playroomUrl:
      'http://localhost:9000/#?code=N4Igxg9gJgpiBcIA8BJAdgGwJZpgAgAcBDKKHAcwF4AdEDIgJ3JloD5q088kAhAVwAuAiGlYAFBjADOUvAFkYSAPT8hI9p26rhnAO4ws5ABYCaIKQIYjybCdNkLl29Ry69BOvPsMmz+ogDWtpIy8ooqHi5oyujYuBogADQgulhQAkZSCADaAOwAbAAcALoAvkA',
    description: "Everybody's got one",
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
        <Text heading size="standard">
          Sassyboi Docs
        </Text>
      </Box>

      <Stack space="large">
        <Divider />

        <ContentBlock>
          <Columns cols={5} gap="xlarge">
            <Column span={1}>
              <Stack as="nav">
                <Text weight="strong">Layout Components</Text>
                <Stack as="ul">
                  {docPages.map((page) => (
                    <li>
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
                  <DocPage {...page} />
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
