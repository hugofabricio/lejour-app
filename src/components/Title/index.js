import React from 'react'

import { string, oneOf, node } from 'prop-types'

import * as S from './styled'

const Title = ({ children, className, level, color, ...rest }) => {
  const tag = level > 6 ? 'h6' : `h${level}`

  return (
    <S.Title className={className} as={tag} color={color} tag={tag} {...rest}>
      {children}
    </S.Title>
  )
}

Title.defaultProps = {
  color: 'red500',
  level: 2,
}

Title.propTypes = {
  color: string,
  className: string,
  level: oneOf([1, 2, 3, 4, 5, 6]),
  children: node,
}

export default Title
