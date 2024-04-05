import React, { useContext } from 'react'
import { pesaContext2 } from '../context/usePesa2'

const B = () => {
  const [pesa] = useContext(pesaContext2)
  return (
    <div>B - {pesa}</div>
  )
}

export default B