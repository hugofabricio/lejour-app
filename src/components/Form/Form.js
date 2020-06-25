import React, { useRef } from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Form = React.forwardRef(({ children, ...props }, ref) => {
  const formRef = ref || useRef(null)

  return (
    <S.Form ref={formRef} noValidate {...props}>
      {children}
    </S.Form>
  )
})

Form.propTypes = {
  children: PropTypes.node.isRequired,
}

Form.displayName = 'Form'

export default Form
