import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { useForm } from 'react-hook-form'
import { withRouter, useHistory } from 'react-router-dom'

import { useStateMachine } from 'little-state-machine'
import { number, object } from 'prop-types'

import CardForm from '../../components/CardForm'
import { Form, Input, Select } from '../../components/Form'
import Headline from '../../components/Headline'
import states from '../../utils/states'
import updateAction from '../../utils/updateAction'
import { stepOneValidationSchema } from '../../utils/validationSchema'

const Step = ({ form, step }) => {
  const history = useHistory()

  const { action, state } = useStateMachine(updateAction)
  const { register, handleSubmit, errors } = useForm({
    validationSchema: stepOneValidationSchema,
  })

  const onSubmit = (data) => {
    action(data)
    history.push(`/steps/${step + 1}`)
  }

  return (
    <Container>
      <Row justify="flex-end">
        <Col sm={10} md={11}>
          <Headline title="Noivos" />
          <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6} lg={5}>
                <CardForm title="Noivo(a)">
                  <Row>
                    <Col xs={12}>
                      <Input
                        name="engaged_name_1"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_name_1}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_rg_1"
                        label="RG"
                        register={register}
                        defaultValue={state.data.engaged_rg_1}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_cpf_1"
                        label="CPF"
                        register={register}
                        defaultValue={state.data.engaged_cpf_1}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_nationality_1"
                        label="Nacionalidade"
                        register={register}
                        defaultValue={state.data.engaged_nationality_1}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_occupation_1"
                        label="Profissão"
                        register={register}
                        defaultValue={state.data.engaged_occupation_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Contatos">
                  <Row>
                    <Col sm={6}>
                      <Input
                        name="engaged_email_1"
                        type="email"
                        label="E-mail"
                        register={register}
                        defaultValue={state.data.engaged_email_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_phone_1"
                        type="tel"
                        label="Telefone"
                        register={register}
                        defaultValue={state.data.engaged_phone_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Endereço">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_address_1"
                        label="Endereço"
                        register={register}
                        defaultValue={state.data.engaged_address_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_address_number_1"
                        label="Número"
                        register={register}
                        defaultValue={state.data.engaged_address_number_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_postalcode_1"
                        type="tel"
                        label="CEP"
                        register={register}
                        defaultValue={state.data.engaged_postalcode_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Select
                        name="engaged_state_1"
                        label="Estado"
                        options={states}
                        register={register}
                        defaultValue={state.data.engaged_state_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="engaged_city_1"
                        label="Cidade"
                        register={register}
                        defaultValue={state.data.engaged_city_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="engaged_neighborhood_1"
                        label="Bairro"
                        register={register}
                        defaultValue={state.data.engaged_neighborhood_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
              </Col>
              <Col md={6} lg={5} offset={{ lg: 1 }}>
                <CardForm title="Noivo(a)">
                  <Row>
                    <Col xs={12}>
                      <Input
                        name="engaged_name_2"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_name_2}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_rg_2"
                        label="RG"
                        register={register}
                        defaultValue={state.data.engaged_rg_2}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_cpf_2"
                        label="CPF"
                        register={register}
                        defaultValue={state.data.engaged_cpf_2}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_nationality_2"
                        label="Nacionalidade"
                        register={register}
                        defaultValue={state.data.engaged_nationality_2}
                        errors={errors}
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        name="engaged_occupation_2"
                        label="Profissão"
                        register={register}
                        defaultValue={state.data.engaged_occupation_2}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Contatos">
                  <Row>
                    <Col sm={6}>
                      <Input
                        name="engaged_email_2"
                        type="email"
                        label="E-mail"
                        register={register}
                        defaultValue={state.data.engaged_email_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_phone_2"
                        type="tel"
                        label="Telefone"
                        register={register}
                        defaultValue={state.data.engaged_phone_2}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Endereço">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_address_2"
                        label="Endereço"
                        register={register}
                        defaultValue={state.data.engaged_address_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_address_number_2"
                        label="Número"
                        register={register}
                        defaultValue={state.data.engaged_address_number_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_postalcode_2"
                        type="tel"
                        label="CEP"
                        register={register}
                        defaultValue={state.data.engaged_postalcode_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Select
                        name="engaged_state_2"
                        label="Estado"
                        options={states}
                        register={register}
                        defaultValue={state.data.engaged_state_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="engaged_city_2"
                        label="Cidade"
                        register={register}
                        defaultValue={state.data.engaged_city_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="engaged_neighborhood_2"
                        label="Bairro"
                        register={register}
                        defaultValue={state.data.engaged_neighborhood_2}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

Step.propTypes = {
  step: number,
  form: object,
}

export default withRouter(Step)
