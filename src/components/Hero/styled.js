import styled from 'styled-components'

import media from '../../utils/media'
import Icon from '../Icon'

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;

  ${media.lessThan('sm')`
    flex-direction: column;
  `}
`

export const HeroCaption = styled.div`
  width: 50%;

  ${media.greaterThan('sm')`
    max-width: 390px;
  `}

  ${media.lessThan('sm')`
    width: 100%;
    padding: 0 40px;
  `}
`

export const HeroBackground = styled.div`
  width: 45%;
  height: 100%;
  display: block;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => `/images/${image}`});

  ${media.greaterThan('sm')`
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    margin-right: 100px;
  `}

  ${media.lessThan('sm')`
    width: 100%;
    height: 150px;
    margin-bottom: 40px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`

export const HeroBrand = styled(Icon)`
  position: absolute;
  bottom: 50px;
  right: 100px;

  ${media.lessThan('xs')`
    top: 15px;
    left: 40px;
    bottom: auto;
    right: auto;
    color: ${({ theme }) => theme.colors.neutral0};
  `}
`

export const HeroRings = styled(Icon)`
  position: absolute;
  bottom: -40px;
  right: -10px;
  opacity: 0.05;
`
