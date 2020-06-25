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
import { stepTwoValidationSchema } from '../../utils/validationSchema'

const Step = ({ form, step }) => {
  const history = useHistory()

  const { action, state } = useStateMachine(updateAction)
  const { register, handleSubmit, errors } = useForm({
    validationSchema: stepTwoValidationSchema,
  })

  const onSubmit = (data) => {
    action(data)
    history.push(`/steps/${step + 1}`)
  }

  return (
    <Container>
      <Row justify="center">
        <Col md={11} lg={10}>
          <Headline title="Dados complementares" />
          <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <CardForm title="Casamento">
              <Row>
                <Col md={6} lg={5}>
                  <Select
                    name="wedding_type"
                    label="Regime de bens"
                    register={register}
                    defaultValue={state.data.wedding_type}
                    errors={errors}
                    options={[
                      {
                        label: 'Comunhão parcial de bens',
                        value: 'comunhao-parcial-de-bens',
                      },
                      {
                        label: 'Comunhão universal de bens',
                        value: 'comunhao-universal-de-bens',
                      },
                      {
                        label: 'Separação total/convencional de bens',
                        value: 'separacao-total-convencional-de-bens',
                      },
                      {
                        label: 'Separação obrigatória de bens',
                        value: 'separacao-obrigatoria-de-bens',
                      },
                      {
                        label: 'Participação final nos aquestos',
                        value: 'participacao-final-nos-aquestos',
                      },
                    ]}
                  />
                </Col>
                <Col md={6} lg={5} offset={{ lg: 1 }}>
                  <Input
                    name="date_married"
                    label="Data do Casamento"
                    register={register}
                    defaultValue={state.data.date_married}
                    errors={errors}
                  />
                </Col>
              </Row>
            </CardForm>

            <Row>
              <Col md={6} lg={5}>
                <CardForm title="Noivo(a)">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_new_name_1"
                        label="Nome após casamento"
                        register={register}
                        defaultValue={state.data.engaged_new_name_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="previous_weddings_1"
                        label="Casamentos anteriores? Quantos?"
                        register={register}
                        defaultValue={state.data.previous_weddings_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Pai">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_dad_name_1"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_dad_name_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_dad_age_1"
                        label="Idade (se vivo)"
                        register={register}
                        defaultValue={state.data.engaged_dad_age_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_dad_death_date_1"
                        label="Data falecimento"
                        register={register}
                        defaultValue={state.data.engaged_dad_death_date_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Mãe">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_mom_name_1"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_mom_name_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_mom_age_1"
                        label="Idade (se vivo)"
                        register={register}
                        defaultValue={state.data.engaged_mom_age_1}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_mom_death_date_1"
                        label="Data falecimento"
                        register={register}
                        defaultValue={state.data.engaged_mom_death_date_1}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
              </Col>

              <Col md={6} lg={5} offset={{ lg: 1 }}>
                <CardForm title="Noivo(a)">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_new_name_2"
                        label="Nome após casamento"
                        register={register}
                        defaultValue={state.data.engaged_new_name_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={12}>
                      <Input
                        name="previous_weddings_2"
                        label="Casamentos anteriores? Quantos?"
                        register={register}
                        defaultValue={state.data.previous_weddings_2}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Pai">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_dad_name_2"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_dad_name_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_dad_age_2"
                        label="Idade (se vivo)"
                        register={register}
                        defaultValue={state.data.engaged_dad_age_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_dad_death_date_2"
                        label="Data falecimento"
                        register={register}
                        defaultValue={state.data.engaged_dad_death_date_2}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                </CardForm>
                <CardForm title="Mãe">
                  <Row>
                    <Col sm={12}>
                      <Input
                        name="engaged_mom_name_2"
                        label="Nome"
                        register={register}
                        defaultValue={state.data.engaged_mom_name_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_mom_age_2"
                        label="Idade (se vivo)"
                        register={register}
                        defaultValue={state.data.engaged_mom_age_2}
                        errors={errors}
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
                        name="engaged_mom_death_date_2"
                        label="Data falecimento"
                        register={register}
                        defaultValue={state.data.engaged_mom_death_date_2}
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
