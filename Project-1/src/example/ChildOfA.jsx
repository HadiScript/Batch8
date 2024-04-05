import React, { useContext } from 'react'
import { DadaContext } from './useContext'

const ChildOfA = () => {
  const [pesa, setPesa] = useContext(DadaContext)


  return (
    <div>ChildOfA - {pesa}</div>
  )
}

export default ChildOfA