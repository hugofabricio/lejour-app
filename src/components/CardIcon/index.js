import React from 'react'

import { string, node } from 'prop-types'

import Icon from '../Icon'
import * as S from './styled'

const CardIcon = ({ icon, children }) => (
  <S.CardIconWrapper>
    <Icon name={icon} color="aqua500" size={32} />
    <S.CardIconBody>{children}</S.CardIconBody>
  </S.CardIconWrapper>
)

CardIcon.propTypes = {
  icon: string,
  children: node,
}

export default CardIcon
