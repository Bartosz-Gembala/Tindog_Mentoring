import { useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { useState } from 'react'

export const AuthModal = () => {
  const [isLogging, setIsLogging] = useState(true)
  const navigate = useNavigate()

  const toggleLogging = () => {
    setIsLogging(!isLogging)
  }

  const handleAuth = () => {
    navigate('/tindog')
  }

  //Here use react-hook-form
  return (
    <div className="d-flex flex-col bg-white z-50 rounded">
      <div className="bg-primary h-20 w-80 flex flex-col items-center justify-center">
        <h3 className="text-white text-center text-4xl font-bold p-3">Login</h3>
      </div>
      <div className="py-2">
        <form className="px-4 h-full flex flex-col gap-5 justify-center">
          <Input name="email" label="Email" />
          <Input name="password" label="Password" type="password" />
          {!isLogging && <Input name="confirm-password" label="Confirm Password" type="password" />}
          <Button onClick={handleAuth}>{!isLogging ? 'Register' : 'Login'}</Button>
        </form>
        <p className="text-center cursor-pointer my-3" onClick={toggleLogging}>
          {isLogging ? "Don't have an account?" : 'Already have an account?'}
        </p>
      </div>
    </div>
  )
}
