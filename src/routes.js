import HomePage from './pages/home'
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
]

export default routes
