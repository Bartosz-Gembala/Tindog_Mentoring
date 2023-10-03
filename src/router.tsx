import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from './pages/LangingPage'

export const router = createBrowserRouter([{ path: '/', element: <LandingPage /> }])
