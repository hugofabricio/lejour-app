import styled from 'styled-components'

import media from '../../utils/media'

export const WaveLeft = styled.div`
  position: fixed;
  top: 10px;
  left: -10px;
  z-index: -1;

  ${media.lessThan('sm')`
    left: -40px;
    position: absolute;
  `}
`

export const WaveRight = styled.div`
  position: fixed;
  bottom: 100px;
  right: -10px;
  z-index: -1;

  ${media.lessThan('sm')`
    bottom: 60px;
  `}
`
