import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from './pages/LangingPage'
import { MainPage } from './pages/MainPage'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/tindog', element: <MainPage /> },
])
