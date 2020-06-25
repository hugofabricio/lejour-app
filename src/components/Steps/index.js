import React from 'react'

import { object, oneOfType, number, bool } from 'prop-types'

import * as S from './styled'

const Steps = ({ match, step }) => <S.StepsWrapper></S.StepsWrapper>

Steps.propTypes = {
  match: object,
  step: oneOfType([number, bool]),
}

export default Steps
