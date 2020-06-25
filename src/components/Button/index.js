import React from 'react'

import { node, string } from 'prop-types'

import * as S from './styled'

const Button = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
)

Button.defaultProps = {
  color: 'neutral0',
  background: 'aqua500',
}

Button.propTypes = {
  children: node,
  color: string,
  background: string,
}

export default Button
