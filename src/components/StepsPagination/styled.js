import { rem, linearGradient } from 'polished'
import styled from 'styled-components'

import media from '../../utils/media'

export const StepsPaginationWrapper = styled.aside`
  position: fixed;
  width: 48px;
  top: 80px;
  left: 90px;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    width: 2px;
    height: 90%;
    display: block;
    background-color: ${({ theme }) => theme.colors.red500};
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }

  ${media.lessThan('md')`
    left: 60px;
  `}

  ${media.lessThan('sm')`
    display: none;
  `}
`

export const StepsPaginationItem = styled.span`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  line-height: 0;
  transition: all 0.4s ease-in-out;

  ${({ active, theme }) =>
    active &&
    linearGradient({
      colorStops: [
        `${theme.colors.pink500} 0.40%`,
        `${theme.colors.red500} 100%`,
      ],
      toDirection: '260deg',
      fallback: theme.colors.red500,
    })}

  ${({ theme, active }) => `
    background-color: ${theme.colors.neutral0};
    font-family: ${theme.font[1]};
    font-size: ${rem(20)};
    color: ${active ? theme.colors.neutral0 : theme.colors.red500};
    border: 2px solid ${theme.colors.red500};
  `}

  ${media.greaterThan('sm')`
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  `}

  ${media.lessThan('sm')`
    &:not(:last-of-type) {
      margin-right: 12px;
    }
  `}
`
