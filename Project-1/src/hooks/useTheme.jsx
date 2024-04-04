import { useState } from "react";
import { gettheme } from "../utils/getTheme";


// Function
const useTheme = () => {

  const [value, setValue] = useState(gettheme());

  const themeHandler = (e) => {
    setValue(e.target.value)
    localStorage.setItem('theme', e.target.value)
  }

  return {
    value, themeHandler
  }
}

export default useTheme