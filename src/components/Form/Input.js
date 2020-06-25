import React from 'react'

import { object, string } from 'prop-types'

import * as S from './styled'

const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <S.Group>
      <S.FloatingGroup>
        <S.Input
          id={name}
          name={name}
          ref={register}
          placeholder=" "
          {...rest}
        />
        <S.Label htmlFor={name}>{label}</S.Label>
      </S.FloatingGroup>
    </S.Group>
  )
}

Input.propTypes = {
  register: object,
  name: string,
  label: string,
  error: object,
}

export default Input
