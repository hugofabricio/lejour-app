import { rgba } from 'polished'
import styled from 'styled-components'

export const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.neutral500, 0.25)};
  height: 100%;
`

export const CardIconBody = styled.div`
  margin-left: 12px;
`
