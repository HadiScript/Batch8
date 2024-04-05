import { createContext, useState } from "react";

export const pesaContext = createContext();



const PesaProvider = ({ children }) => {

  const [pesa, setPesa] = useState(100)


  return <pesaContext.Provider value={[pesa, setPesa]}>
    {children}
  </pesaContext.Provider>
}


export default PesaProvider