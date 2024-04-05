import React, { useContext } from 'react'
import Profile from './Profile'
import { parentContext } from './useContext'
import Home from './Home'

const App = () => {
  const [auth, loading] = useContext(parentContext)


  return (
    <div>


      {!loading && <>loading...</>}
      {auth ? <Profile /> : <Home />}


    </div>
  )
}

export default App