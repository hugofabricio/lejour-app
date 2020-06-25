import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    padding: 0;
    margin: 0;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: relative;
    font-family: ${({ theme }) => theme.font[0]};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral500};
  }

  a:not(:disabled),
  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  a,
  button {
    transition: all .4s ease;
  }

  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font[1]};
    font-weight: 400;
    line-height: 1;
    margin: 0;

    span {
      margin: 0;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.8;
  }

  address {
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol,
  ul,
  dl {
    margin: 0;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: textfield;
  }

  textarea {
    overflow: auto;
    resize: vertical;
    -webkit-appearance: textfield;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  mark {
    padding: 0.2em;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-datetime-edit {
    overflow: visible;
    line-height: 0;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  main {
    display: block;
  }

  [hidden] {
    display: none !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .t-uppercase {
    text-transform: uppercase !important;
  }

  .t-lowercase {
    text-transform: lowercase !important;
  }
`

export default GlobalStyles
