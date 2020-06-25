import { rgba } from 'polished'
import styled from 'styled-components'

export const Label = styled.label``

export const Input = styled.input`
  cursor: text;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font-family: inherit;
  appearance: none;
  display: block;
  width: 100%;
  min-height: calc(1.5rem + 1rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out;
  -webkit-rtl-ordering: logical;
  -webkit-writing-mode: horizontal-tb !important;

  ${({ theme }) => `
    color: ${theme.form.color};
    padding: ${theme.form.padding};
    background-color: ${theme.form.backgroundColor};
    border: 1px solid ${theme.form.borderColor};
    border-radius: ${theme.form.borderRadius};

    &:focus {
      color: ${theme.form.color};
      border-color: ${theme.form.borderColorFocus};
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${rgba(theme.form.borderColorFocus, 0.25)};
    }
  `}
`

export const Select = styled(Input).attrs({ as: 'select' })``

export const Group = styled.div`
  margin-bottom: 24px;
`

export const FloatingGroup = styled.div`
  position: relative;
  width: 100%;

  ${Label} {
    position: absolute;
    top: 0;
    left: 1rem;
    padding: 9px 2px 0 2px;
    transition: all 200ms;
  }

  ${Input} {
    &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
      color: ${({ theme }) => theme.form.labelColorFocus};
      font-size: 75%;
      padding: 0 2px;
      transform: translate3d(0, -50%, 0);
      background-color: ${({ theme }) => theme.colors.neutral0};
    }
  }
`
