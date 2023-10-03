import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
// import { useState } from 'react'

export const AuthModalBody = () => {
  //   const [isLogging, setIsLogging] = useState(true)

  //   const toggleLogging = () => {
  //     setIsLogging(!isLogging)
  //   }

  return (
    <>
      <form className="px-4 h-80 flex flex-col gap-5 justify-center">
        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        <Button>Login</Button>
      </form>
    </>
  )
}
