import HomePage from './pages/home'
import LivePage from './pages/live'
import StepPage from './pages/steps'
import SuccessPage from './pages/success'

const routes = [
  {
    path: '/',
    exact: true,
    page: HomePage,
  },
  {
    path: '/steps/:step',
    page: StepPage,
  },
  {
    path: '/obrigado',
    page: SuccessPage,
  },
  {
    path: '/meu-casamento',
    page: LivePage,
  },
]

export default routes
