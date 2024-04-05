
const ListOfCategory = ({cats}) => {
  return (
    <div className="d-flex gap-3 flex-wrap align-items-center mt-4">
      {
        cats.map((x, index) => <div key={index} className="border px-2 rounded-3" >{x} </div>)
      }
    </div>
  )
}

export default ListOfCategory