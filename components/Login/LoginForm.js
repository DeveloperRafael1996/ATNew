import React, { useState } from 'react'
import { Icon, IconButton, InputAdornment, TextField } from '@mui/material'
import { SharedButton } from 'shared_components'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <TextField
          id="usuario"
          label="Usuario"
          size="small"
          className="text-gray-700"
          fullWidth
          variant="outlined"
          required
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Contraseña"
          size="small"
          className="text-gray-700"
          fullWidth
          variant="outlined"
          InputProps={{
            className: 'pr-2',
            type: showPassword ? 'text' : 'password',
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  size="large"
                >
                  <Icon className="text-14" color="action">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <div className="w-full flex justify-end">
          <span className="block text-8 font-400 pt-4 text-gray-600">
            ¿Olvidaste tu contraseña?
          </span>
        </div>
      </div>
      <div>
        <SharedButton text="Ingresa" color="tertiary" full />
      </div>
    </div>
  )
}

export default LoginForm
