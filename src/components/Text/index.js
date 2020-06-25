import React from 'react'

import { string, oneOfType, node, number } from 'prop-types'

import * as S from './styled'

const Text = ({ children, className, color, size, ...rest }) => (
  <S.Text className={className} color={color} size={size} {...rest}>
    {children}
  </S.Text>
)

Text.defaultProps = {
  color: 'neutral500',
  size: 16,
}

Text.propTypes = {
  size: oneOfType([string, number]),
  color: string,
  className: string,
  children: node,
}

export default Text
