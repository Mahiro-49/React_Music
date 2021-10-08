import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {ThemeHeaderSmallWrapper} from "./style"

const MJHeaderSmall = memo(function (props) {
  const {title, more} = props;

  return (
    <ThemeHeaderSmallWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </ThemeHeaderSmallWrapper>
  )
})

MJHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default MJHeaderSmall