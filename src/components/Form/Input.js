import React from 'react'

import { object, string, func } from 'prop-types'

import * as S from './styled'

const Input = ({ name, register, type, label, errors, ...rest }) => (
  <S.Group>
    <S.FloatingGroup>
      <S.Input
        ref={register}
        id={name}
        name={name}
        type={type}
        placeholder=" "
        {...rest}
      />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.FloatingGroup>

    {errors?.[name] && <S.HelperText>{errors?.[name]?.message}</S.HelperText>}
  </S.Group>
)

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  register: func,
  name: string,
  type: string,
  label: string,
  errors: object,
}

export default Input
