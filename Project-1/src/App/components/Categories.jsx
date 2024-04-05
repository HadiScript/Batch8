import { MdFormatListNumberedRtl } from "react-icons/md";
import Heading from "./Heading";
import ListOfCategory from "./ListOfCategory";


const Categories = ({ cats, addCats, changeHandler, newCats }) => {

  return (
    <div className="mt-5">
      <Heading title={'Categories'} icon={<MdFormatListNumberedRtl size={30} />} />

      {/* input for taking input */}
      <div className="d-flex gap-3 mt-4">
        <input className={`form-control form-control-sm`} value={newCats} onChange={changeHandler} style={{ maxWidth: "500px" }} type="text" placeholder="Please enter your category" />
        <button className="btn btn-dark" onClick={addCats}>Add</button>
      </div>





      {/* search box */}

      <ListOfCategory cats={cats} />
    </div>
  )
}

export default Categories