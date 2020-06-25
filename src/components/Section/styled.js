import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SectionWrapper = styled(motion.section)`
  width: 100%;

  ${({ paddingTop }) =>
    paddingTop &&
    `
    padding-top: ${paddingTop}px;
  `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    `
    padding-bottom: ${paddingBottom}px;
  `}
`
