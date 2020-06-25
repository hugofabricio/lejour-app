import { between } from 'polished'
import styled from 'styled-components'

export const Title = styled.h2`
  line-height: 1.2;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, tag }) =>
    between(theme.heading[tag].min, theme.heading[tag].max)};

  ${({ italic }) =>
    italic &&
    `
    font-style: italic;
  `}

  ${({ bold }) =>
    bold &&
    `
    font-weight: bold;
  `}

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
