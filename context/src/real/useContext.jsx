import React, { useState } from 'react';

export const parentContext = React.createContext();

const Parent = ({ children }) => {

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false)



  // console.log("from parent")

  // request -> backend https://localhost:8000/api/currentUser
  // return const res = Yes | No

  // if(res) {
  // setauth(true)
  // } else {
  // setauth(false)
  // }


  // time take -> 2sec

  setTimeout(() => {
    setLoading(true);
    setAuth(true);
  }, 2000)



  return (
    <parentContext.Provider value={[auth, loading, setAuth]}>
      {children}
    </parentContext.Provider>
  )
}

export default Parent