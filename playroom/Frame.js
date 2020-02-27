import 'focus-visible'
import React, {useEffect} from 'react'

export default ({children}) => {
  useEffect(() => {
    fetch('https://unpkg.com/feather-icons@4.26.0/dist/feather-sprite.svg')
      .then((response) => response.text())
      .then((text) => {
        const div = document.createElement('div')
        div.innerHTML = text
        div.hidden = true
        document.body.insertBefore(div, document.body.childNodes[0])
      })
  })

  return children
}
