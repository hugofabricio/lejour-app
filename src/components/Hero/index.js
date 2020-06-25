import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Hero = ({ children, image }) => (
  <S.HeroWrapper>
    <S.HeroBackground image={image} />
    <S.HeroCaption>{children}</S.HeroCaption>
    <S.HeroBrand name="lejour" color="red500" size={100} />
    <S.HeroRings name="rings" color="red500" size={280} />
  </S.HeroWrapper>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
}

export default Hero
