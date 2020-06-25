import React from 'react'

import { string, number, oneOfType, object } from 'prop-types'

import icons from '../../svg/icon-map'
import * as S from './styled'

const Icon = ({ className, name, size, color, ...rest }) => {
  if (!icons[name]) return null

  const Icon = icons[name]

  return (
    <S.IconWrapper
      className={`icon ${className} icon-${name.toLowerCase()}`}
      color={color}
      size={size}
      {...rest}
    >
      <Icon />
    </S.IconWrapper>
  )
}

Icon.defaultProps = {
  className: '',
  size: 16,
  color: 'neutral500',
  style: {},
}

Icon.propTypes = {
  className: string,
  name: string.isRequired,
  size: oneOfType([string, number]),
  color: string,
  style: object,
}

export default Icon
