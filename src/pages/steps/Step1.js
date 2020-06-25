import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { number, object } from 'prop-types'

import Title from '../../components/Title'

const Step = ({ form, step }) => (
  <Container>
    <Row justify="center">
      <Col md={9}>
        <Title level={1} italic>
          Noivos
        </Title>
      </Col>
    </Row>
  </Container>
)

Step.propTypes = {
  step: number,
  form: object,
}

export default Step
