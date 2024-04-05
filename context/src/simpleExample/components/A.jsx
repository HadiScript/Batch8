import React, { useContext } from 'react'
import { pesaContext } from '../context/usePesa'
import A1 from './A1'

const A = () => {

  const [pesa, setPesa] = useContext(pesaContext)

  return (
    <div>A - {pesa} - <button onClick={() => setPesa(pesa + 10)} >Inc</button>


      <A1 />
    </div>
  )
}

export default A