import { useState } from "react"
import TopHeader from "./components/TopHeader";

import '../assets/app.css'
import useTheme from "../hooks/useTheme";
import Categories from "./components/Categories";
import List from "./components/List";
import Which from "./components/Which";

const App = () => {

  const { value, themeHandler } = useTheme();

  const [whichComponent, setWhichComponent] = useState('cats')

  const [cats, setCats] = useState([
    'ReactJs', 'NodeJs', 'Javascript', 'Solidity', 'Microservices', 'ORM'
  ])



  return (
    <div className={`bg-${value} text-${value === "light" ? "" : "white"}`} style={{ minHeight: "100vh" }}>

      <div className="container">

        <TopHeader value={value} themeHandler={themeHandler} />

        <Which
          whichComponent={whichComponent}
          setWhichComponent={setWhichComponent}
        />

        {
          whichComponent === 'cats' ? <Categories cats={cats} setCats={setCats} /> : <List />
        }

      </div>

    </div>
  )
}

export default App