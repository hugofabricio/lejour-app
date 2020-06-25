import styled from 'styled-components'

export const IconWrapper = styled.span`
  flex-shrink: 0;
  display: flex;

  ${({ size, color, theme }) => `
    width: ${size}px;
    height: ${size}px;
    color: ${theme.colors[color]};
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

  svg {
    width: 100%;
    height: auto;
  }
`
