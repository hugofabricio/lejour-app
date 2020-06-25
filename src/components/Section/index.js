import React from 'react'

import { node } from 'prop-types'

import * as S from './styled'

const Section = ({ children, ...rest }) => (
  <S.SectionWrapper
    initial="initial"
    animate="in"
    exit="out"
    variants={{
      initial: {
        opacity: 0,
      },
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    }}
    transition={{
      type: 'tween',
      ease: 'anticipate',
      duration: 1,
    }}
    {...rest}
  >
    {children}
  </S.SectionWrapper>
)

Section.propTypes = {
  children: node,
}

export default Section
