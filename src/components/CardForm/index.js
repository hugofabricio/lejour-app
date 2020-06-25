import React from 'react'

import { node, string } from 'prop-types'

import Title from '../Title'
import * as S from './styled'

const CardForm = ({ children, title }) => (
  <S.CardFormWrapper>
    <S.CardFormHeading>
      <Title color="aqua500">{title}</Title>
    </S.CardFormHeading>
    <S.CardFormBody>{children}</S.CardFormBody>
  </S.CardFormWrapper>
)

CardForm.propTypes = {
  children: node,
  title: string,
}

export default CardForm
