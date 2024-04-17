import { Link } from "react-router-dom"
import useActive from "../../hooks/useActive"

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]





const Siderbar = () => {





  return (
    <div className='menu'>

      {links?.map(x => <div key={x.name}  ><Link to={x.path} className={`_link  ${useActive(x.path)} `} >{x.name}</Link>  </div>)
      }

    </div >
  )
}

export default Siderbar