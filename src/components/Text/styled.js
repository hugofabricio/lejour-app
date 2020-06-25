import { rem } from 'polished'
import styled from 'styled-components'

export const Text = styled.p`
  line-height: 1.5;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ size }) => rem(size)};

  ${({ marginTop }) =>
    marginTop &&
    `
    margin-top: ${marginTop}px;
  `}

  ${({ marginBottom }) =>
    marginBottom &&
    `
    margin-bottom: ${marginBottom}px;
  `}

  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: ${marginLeft}px;
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: ${marginRight}px;
  `}
`
