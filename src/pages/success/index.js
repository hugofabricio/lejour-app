import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { object } from 'prop-types'

import Button from '../../components/Button'
import Headline from '../../components/Headline'
import Icon from '../../components/Icon'
import Section from '../../components/Section'
import Text from '../../components/Text'
import Title from '../../components/Title'

const SuccessPage = ({ match }) => {
  return (
    <Section paddingTop={80} paddingBottom={180}>
      <Container>
        <Row justify="center">
          <Col md={11} lg={10}>
            <Headline title="Cadastro Concluído" />
            <Row>
              <Col md={8} lg={7}>
                <Title color="aqua500" marginBottom="24" bold>
                  Obrigado!
                </Title>
                <Text marginBottom={24}>
                  Com o envio dos documentos, um dos seus maiores sonhos está
                  prestes a se realizar. Em breve, nosso time entrará em contato
                  com mais informações e enviaremos o link da live para
                  realização do seu sonho.
                </Text>

                <div>
                  <Button href="https://lejour.com.br" title="Conheça a Lejour">
                    Conheça a Lejour
                    <Icon
                      color="neutral0"
                      name="arrow-right"
                      size="12"
                      marginLeft="4"
                    />
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

SuccessPage.propTypes = {
  match: object,
}

export default SuccessPage
