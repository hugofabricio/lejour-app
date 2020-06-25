import React from 'react'

import { object, string, array } from 'prop-types'

import * as S from './styled'

const Input = ({ register, name, label, options, error, ...rest }) => {
  return (
    <S.Group>
      <S.Label for={name}>{label}</S.Label>
      <S.Select id={name} name={name} ref={register} {...rest}>
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </S.Select>
    </S.Group>
  )
}

Input.propTypes = {
  register: object,
  name: string,
  label: string,
  options: array,
  error: object,
}

export default Input
