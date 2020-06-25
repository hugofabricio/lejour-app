import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import Badge from '../../components/Badge'
import Button from '../../components/Button'
import Hero from '../../components/Hero'
import Icon from '../../components/Icon'
import Section from '../../components/Section'
import Text from '../../components/Text'
import Title from '../../components/Title'

const HomePage = () => {
  return (
    <Section>
      <Hero image="bg-hero.png">
        <Badge label="Casamento civil online" marginBottom="24" />
        <Title level={1} marginBottom="24" italic bold>
          Celebre o amor onde quer que você esteja
        </Title>
        <Text color="neutral900" marginBottom="32">
          Fazer sua cerimônia nunca foi tão fácil e emocionante! O Lejour traz a
          união civil, moldada especialmente ao casal, porque o sonho não pode
          ser adiado!
        </Text>
        <Button
          title="Iniciar"
          to={(location) => ({ ...location, pathname: '/steps/1' })}
          as={Link}
        >
          Iniciar{' '}
          <Icon color="neutral0" name="arrow-right" size="12" marginLeft="4" />
        </Button>
      </Hero>
    </Section>
  )
}

export default withRouter(HomePage)
