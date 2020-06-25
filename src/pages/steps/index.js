import React from 'react'

import { object } from 'prop-types'

import Section from '../../components/Section'
import steps from './steps'

const StepPage = ({ match, form }) => {
  const step = parseInt(match.params.step)
  const CurrentStep = steps[step] || null

  return (
    <Section paddingTop={80} paddingBottom={80}>
      {CurrentStep && <CurrentStep step={step} form={form} />}
    </Section>
  )
}

StepPage.propTypes = {
  match: object,
  form: object,
}

export default StepPage
