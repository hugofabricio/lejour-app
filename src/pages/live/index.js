import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import Headline from '../../components/Headline'
import Section from '../../components/Section'

const LivePage = ({ match }) => {
  return (
    <Section paddingTop={80} paddingBottom={180}>
      <Container>
        <Row justify="center">
          <Col md={11}>
            <Headline title="Meu Casamento!" />
            <Row>
              <Col md={8} lg={7}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default LivePage
