import React from 'react'

import { string } from 'prop-types'

import Title from '../Title'
import * as S from './styled'

const Headline = ({ title }) => (
  <S.HeadlineWrapper>
    <Title level={1} italic>
      {title}
    </Title>
  </S.HeadlineWrapper>
)

Headline.propTypes = {
  title: string,
}

export default Headline
