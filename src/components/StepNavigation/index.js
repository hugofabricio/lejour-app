import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { oneOfType, number, string, object } from 'prop-types'

import Button from '../Button'
import Icon from '../Icon'
import * as S from './styled'

const StepNavigation = ({ step, form }) => {
  const [prevPath, setPrevPath] = useState(false)
  const [nextLabel, setNextLabel] = useState(false)

  useEffect(() => {
    setPrevPath(step > 1 && step <= 5 ? `/steps/${step - 1}` : `/`)
    setNextLabel(step < 5 ? 'Próximo' : 'Enviar')
  }, [step])

  const active = step >= 1 && step <= 5

  return (
    <S.StepNavigationWrapper active={active}>
      <Button
        to={(location) => ({ ...location, pathname: prevPath })}
        color="neutral0"
        background="ghost"
        title="Voltar"
        marginRight={12}
        as={Link}
      >
        Voltar
      </Button>

      <Button
        title={nextLabel.toString()}
        color="red500"
        background="neutral0"
        onClick={() =>
          form.current?.dispatchEvent(new Event('submit', { cancelable: true }))
        }
      >
        {nextLabel}
        <Icon color="red500" name="arrow-right" size="12" marginLeft="4" />
      </Button>
    </S.StepNavigationWrapper>
  )
}

StepNavigation.propTypes = {
  step: oneOfType([number, string]),
  form: object,
}

export default StepNavigation
