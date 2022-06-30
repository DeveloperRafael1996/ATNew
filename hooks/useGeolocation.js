import { useState } from 'react'
import { CalimacoClient } from '@calimaco/npm-package-react-test'
import { COUNTRY } from 'utils/constants'
import configCalimaco from 'utils/configCalimaco'

function useGeolocation() {
  const calimacoClient = new CalimacoClient(configCalimaco)
  const [departments, setDepartments] = useState([])

  const getDepartments = async () => {
    const response = await calimacoClient.getStates(COUNTRY)
    setDepartments(response.states)
  }

  return { getDepartments, departments }
}
export default useGeolocation
