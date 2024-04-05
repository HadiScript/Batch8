import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import DadaProvider from './useContext'

const App = () => {



  return (
    <DadaProvider>

      <ChildA  />


      <ChildB />


    </DadaProvider>
  )
}

export default App