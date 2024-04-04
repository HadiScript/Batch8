import { GoTasklist } from "react-icons/go";
import Heading from "./Heading";

const List = () => {
  return (
    <div className="mt-5">

      <Heading title={'List'} icon={<GoTasklist size={30} />} />
    </div>
  )
}

export default List