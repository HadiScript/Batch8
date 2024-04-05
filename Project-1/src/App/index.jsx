import { useState } from "react"
import TopHeader from "./components/TopHeader";

import '../assets/app.css'
import useTheme from "../hooks/useTheme";
import Categories from "./components/Categories";
import List from "./components/List";
import Which from "./components/Which";
import useCats from "../hooks/useCats";

const App = () => {

  const { value, themeHandler } = useTheme();

  const [whichComponent, setWhichComponent] = useState('cats')

  const { cats, addCats, changeHandler, newCats } = useCats();



  return (
    <div className={`${value === 'dark' ? 'darkBg' : ""}`} style={{ minHeight: "100vh" }}>

      <div className="container">

        <TopHeader value={value} themeHandler={themeHandler} />

        <Which
          whichComponent={whichComponent}
          setWhichComponent={setWhichComponent}
        />

        {
          whichComponent === 'cats' ?
            <Categories
              cats={cats}
              addCats={addCats}
              changeHandler={changeHandler}
              newCats={newCats}
            /> :
            <List />
        }

      </div>

    </div>
  )
}

export default App