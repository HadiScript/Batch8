import React, { useContext } from 'react'
import PesaProvider, { pesaContext } from './context/usePesa'
import A from './components/A'
import B from './components/B'
import PesaProvider2 from './context/usePesa2'

const App = () => {
  const [pesa] = useContext(pesaContext) // consume 


  return (
    <div>
      <h1>App - {pesa}</h1>


      <br />

      <A />



      <br />

      <PesaProvider2>
        <B />
      </PesaProvider2>

    </div>
  )
}

export default App