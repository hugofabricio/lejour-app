import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import routes from '../../routes'
import { GlobalStyles, theme } from '../../style'
import checkPath from '../../utils/checkPath'
import StepNavigation from '../StepNavigation'
import Steps from '../Steps'
import * as S from './styled'

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const location = useLocation()

  const matchStep = useRouteMatch({
    path: '/steps/:step',
    strict: true,
    sensitive: true,
  })

  const checkHome = !checkPath(location.pathname)
  const formRef = useRef(null)

  useEffect(() => {
    if (checkPath(location.pathname, '/obrigado')) {
      setCurrentStep(6)
    } else {
      setCurrentStep(parseInt(matchStep?.params?.step) || 0)
    }
  }, [matchStep, location])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence>
        <S.LayoutWrapper>
          {checkHome && <Steps match={matchStep} step={currentStep} />}

          <Switch location={location} key={location.pathname}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.page {...props} form={formRef} />}
              />
            ))}
          </Switch>

          <StepNavigation step={currentStep} form={formRef} />
        </S.LayoutWrapper>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default Layout
