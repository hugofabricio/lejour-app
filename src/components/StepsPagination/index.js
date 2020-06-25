import React from 'react'

import { object, oneOfType, number, bool } from 'prop-types'

import steps from '../../pages/steps/steps'
import * as S from './styled'

const StepsPagination = ({ match, currentStep }) => {
  const Dots = Object.keys(steps).map((step, i) => {
    return (
      <S.StepsPaginationItem
        key={i}
        active={match ? i + 1 <= currentStep : true}
      >
        {i + 1}
      </S.StepsPaginationItem>
    )
  })

  return <S.StepsPaginationWrapper>{Dots}</S.StepsPaginationWrapper>
}

StepsPagination.propTypes = {
  match: object,
  currentStep: oneOfType([number, bool]),
}

export default StepsPagination
