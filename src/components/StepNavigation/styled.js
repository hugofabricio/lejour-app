import { linearGradient } from 'polished'
import styled from 'styled-components'

export const StepNavigationWrapper = styled.nav`
  position: fixed;
  z-index: 1499;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 60px;
  padding-right: 60px;
  transition: all 0.5s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transform: translateY(${({ active }) => (active ? '0' : '100%')});

  ${({ theme }) =>
    linearGradient({
      colorStops: [
        `${theme.colors.pink500} 0.40%`,
        `${theme.colors.red500} 100%`,
      ],
      toDirection: '260deg',
      fallback: theme.colors.red500,
    })};
`
