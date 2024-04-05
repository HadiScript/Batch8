import { createContext, useState } from "react";


export const DadaContext = createContext();


const DadaProvider = ({ children }) => {

  const [pesa, setPesa] = useState(1000)

  return <DadaContext.Provider value={[pesa, setPesa]}>
    {children}
  </DadaContext.Provider>
}

export default DadaProvider