import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { number, object } from 'prop-types'

import CardForm from '../../components/CardForm'
import { Input } from '../../components/Form'
import Headline from '../../components/Headline'

const Step = ({ form, step }) => (
  <Container>
    <Row justify="center">
      <Col md={9}>
        <Headline title="Noivos" />
        <Row>
          <Col md={6}>
            <CardForm title="Noivo(a)">
              <Row>
                <Col xs={12}>
                  <Input name="engaged_name_1" label="Nome" />
                </Col>
                <Col xs={6}>
                  <Input name="engaged_rg_1" label="RG" />
                </Col>
                <Col xs={6}>
                  <Input name="engaged_cpf_1" label="CPF" />
                </Col>
                <Col xs={6}>
                  <Input name="engaged_nationality_1" label="Nacionalidade" />
                </Col>
                <Col xs={6}>
                  <Input name="engaged_occupation_1" label="Profissão" />
                </Col>
              </Row>
            </CardForm>
            <CardForm title="Contatos">
              <Row>
                <Col sm={6}>
                  <Input name="engaged_email_1" label="E-mail" />
                </Col>
                <Col sm={6}>
                  <Input name="engaged_phone_1" label="Telefone" />
                </Col>
              </Row>
            </CardForm>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

Step.propTypes = {
  step: number,
  form: object,
}

export default Step
