import MainLayout from './layout/MainLayout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import { useRoutes } from 'react-router-dom'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
  ])
  return routeElements
}
