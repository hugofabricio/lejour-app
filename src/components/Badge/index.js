import React from 'react'

import { string } from 'prop-types'

import * as S from './styled'

const Badge = ({ label, color, ...rest }) => (
  <S.BadgeWrapper color={color} {...rest}>
    {label}
  </S.BadgeWrapper>
)

Badge.defaultProps = {
  color: 'neutral500',
}

Badge.propTypes = {
  label: string,
  color: string,
}

export default Badge
