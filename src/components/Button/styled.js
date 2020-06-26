import { rem, darken } from 'polished'
import styled from 'styled-components'

export const Button = styled.a`
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  font-family: inherit;
  font-size: ${rem(14)};
  letter-spacing: ${rem(2)};
  line-height: 1.1;
  border-radius: ${rem(25)};
  transition: background-color color 0.15s ease-in-out;
  overflow: visible;
  text-rendering: auto;
  word-spacing: normal;
  text-shadow: none;
  align-items: flex-start;

  .icon {
    margin: auto auto auto 8px;
  }

  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
    display: flex;
  `}

  ${({ theme, color, background }) => `
    padding: ${theme.button.default.padding};
    color: ${theme.colors[color]};
    background-color: ${theme.colors[background]};
    border-color: ${theme.colors[background]};

    &:hover {
      color: ${theme.colors[color]};
      background-color: ${darken('0.1', theme.colors[background])};
      border-color: ${darken('0.1', theme.colors[background])};
    }
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
