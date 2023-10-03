import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { useState } from 'react'

export const AuthModalBody = () => {
  const [isLogging, setIsLogging] = useState(true)

  const toggleLogging = () => {
    setIsLogging(!isLogging)
  }

  return (
    <div className="py-2">
      <form className="px-4 h-full flex flex-col gap-5 justify-center">
        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        {!isLogging && <Input name="confirm-password" label="Confirm Password" type="password" />}
        <Button>{!isLogging ? 'Register' : 'Login'}</Button>
      </form>
      <p className="text-center cursor-pointer my-3" onClick={toggleLogging}>
        {isLogging ? "Don't have an account?" : 'Already have an account?'}
      </p>
    </div>
  )
}
