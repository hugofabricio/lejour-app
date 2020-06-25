import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import routes from '../../routes'
import { GlobalStyles, theme } from '../../style'
import checkPath from '../../utils/checkPath'
import StepNavigation from '../StepNavigation'
import StepsPagination from '../StepsPagination'
import { WaveLeft, WaveRight } from '../Waves'
import * as S from './styled'

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const location = useLocation()

  const matchStep = useRouteMatch({
    path: '/steps/:step',
    strict: true,
    sensitive: true,
  })

  const matchLive = useRouteMatch({
    path: '/meu-casamento',
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
          {checkHome && (
            <>
              {!matchLive && (
                <StepsPagination match={matchStep} currentStep={currentStep} />
              )}
              <WaveLeft />
              <WaveRight />
              <S.LayoutRings name="rings" color="red500" size={340} />
            </>
          )}

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
