import { rem } from 'polished'
import styled from 'styled-components'

export const BadgeWrapper = styled.span`
  display: inline-flex;
  align-self: flex-start;
  font-size: ${rem(14)};
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color]};

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
