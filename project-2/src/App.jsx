import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TopHeader from './component/TopHeader'

const App = () => {

  const [current, setCurrent] = useState("home")


  return (
    <>
      <TopHeader setCurrent={setCurrent} current={current} />
      {
        current === 'home' ?
          <Home />
          : current === "about" ?
            <About /> :
            <Contact />
      }


    </>
  )
}

export default App