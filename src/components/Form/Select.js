import React from 'react'

import { object, string, array } from 'prop-types'

import * as S from './styled'

const Input = ({ name, label, options, error, ...rest }) => {
  return (
    <S.Group>
      <S.Label htmlFor={name} className="sr-only">
        {label}
      </S.Label>
      <S.Select id={name} name={name} {...rest}>
        <S.SelectOption value="">{label}</S.SelectOption>
        {options.map(({ value, label }, i) => (
          <S.SelectOption key={i} value={value}>
            {label}
          </S.SelectOption>
        ))}
      </S.Select>
    </S.Group>
  )
}

Input.propTypes = {
  name: string,
  label: string,
  options: array,
  error: object,
}

export default Input
