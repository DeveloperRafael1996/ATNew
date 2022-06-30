import React from 'react'
import { SharedButton } from 'shared_components'

const LoginCreateAccount = () => {
  return (
    <div className="space-y-8 pt-12">
      <div className="font-400 text-8 text-gray-600">
        <span className="block">¿No tienes una cuenta?</span>
        <span className="block">¡Qué esperas!</span>
      </div>
      <div>
        <SharedButton text="¡REGÍSTRATE AQUÍ!" color="primary" full />
      </div>
    </div>
  )
}

export default LoginCreateAccount
