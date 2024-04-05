import { createContext, useState } from "react";

export const pesaContext2 = createContext();



const PesaProvider2 = ({ children }) => {

  const [pesa, setPesa] = useState(100000000000)


  return <pesaContext2.Provider value={[pesa, setPesa]}>
    {children}
  </pesaContext2.Provider>
}


export default PesaProvider2