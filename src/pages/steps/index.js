import React from 'react'

import { object } from 'prop-types'

import Section from '../../components/Section'
import steps from './steps'

const StepPage = ({ match, form }) => {
  const step = parseInt(match.params.step)
  const CurrentStep = steps[step] || null

  return (
    <Section className="step" paddingTop={80} paddingBottom={180}>
      {CurrentStep && <CurrentStep step={step} form={form} />}
    </Section>
  )
}

StepPage.propTypes = {
  match: object,
  form: object,
}

export default StepPage
