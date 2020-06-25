import { rem, linearGradient } from 'polished'
import styled from 'styled-components'

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
    margin: 0 auto;
    z-index: -1;
  }
`

export const StepsPaginationItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  line-height: 0;
  transition: all 0.4s ease-in-out;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  ${({ theme, active }) => `
    background-color: ${theme.colors.neutral0};
    font-family: ${theme.font[1]};
    font-size: ${rem(20)};
    color: ${active ? theme.colors.neutral0 : theme.colors.red500};
    border: 2px solid ${theme.colors.red500};
  `}

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
`
