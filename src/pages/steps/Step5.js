import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { useForm } from 'react-hook-form'
import { withRouter, useHistory } from 'react-router-dom'

import { useStateMachine } from 'little-state-machine'
import { number, object } from 'prop-types'

import CardForm from '../../components/CardForm'
import CardIcon from '../../components/CardIcon'
import { Form } from '../../components/Form'
import Headline from '../../components/Headline'
import Text from '../../components/Text'
import updateAction from '../../utils/updateAction'
import { stepFiveValidationSchema } from '../../utils/validationSchema'

const Step = ({ form, step }) => {
  const history = useHistory()

  const { action } = useStateMachine(updateAction)
  const { handleSubmit } = useForm({
    validationSchema: stepFiveValidationSchema,
  })

  const onSubmit = (data) => {
    action(data)
    history.push(`/obrigado`)
  }

  return (
    <Container>
      <Row justify="flex-end">
        <Col sm={10} md={11}>
          <Headline title="Documentos" />
          <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <CardForm title="Clique abaixo para fazer o upload dos arquivos.">
              <Row>
                <Col md={12}>
                  <CardIcon icon="id-badge">
                    <Text size={14} bold>
                      Certidão de nascimento para solteiros ou certidão do
                      último casamento para divorciados(as) ou viúvos(as).*
                    </Text>
                  </CardIcon>
                </Col>
                <Col md={12}>
                  <CardIcon icon="id-card">
                    <Text size={14} bold>
                      RG ou CNH dos noivos e testemunhas.
                    </Text>
                  </CardIcon>
                </Col>
                <Col md={12}>
                  <CardIcon icon="file-church">
                    <Text size={14} bold>
                      Certidão de óbito do ex-cônjuge para aquele(a) que é
                      viúvo(a).
                    </Text>
                  </CardIcon>
                </Col>
              </Row>
              <Text size={12} italic bold>
                *Se foi casado mais de uma vez, enviar certidão original do
                último casamento + certidões dos casamentos anteriores.
                Atente-se que a certidão do último casamento deve ser original,
                apenas podem ser cópias, as certidões de casamentos anteriores
                ao último.
              </Text>
            </CardForm>
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
