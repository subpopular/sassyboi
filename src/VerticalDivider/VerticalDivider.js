import React from "react"
import cx from "classnames"
import Box from "../Box/Box"
import t from 'prop-types'
import "./verticaldivider.css"
const VerticalDivider = ({ tone = "subtle", className = "", darker = false, ...props }) => {
    console.log('[will] darker', darker)
    
  const classes = cx(className, `u-vertical-divider--${tone}`, {'u-vertical-divider--dark' : darker === true})
  return <Box aria-hidden className={classes} {...props} />
}

VerticalDivider.propTypes = {
    /**
     * The color tone of the border
     */
    tone: t.string,
    /**
     * Darkens the tone of the default border
     */
    darker: t.bool,
}

VerticalDivider.displayName = 'VerticalDivider'

export default VerticalDivider