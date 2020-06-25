import styled from 'styled-components'

import Icon from '../Icon'

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const HeroCaption = styled.div`
  width: 50%;
  max-width: 390px;
`

export const HeroBackground = styled.div`
  width: 45%;
  height: 100%;
  display: block;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => `/images/${image}`});
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  margin-right: 100px;
`

export const HeroBrand = styled(Icon)`
  position: absolute;
  bottom: 50px;
  right: 100px;
`

export const HeroRings = styled(Icon)`
  position: absolute;
  bottom: -40px;
  right: -10px;
  opacity: 0.05;
`
