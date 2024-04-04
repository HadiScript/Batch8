
const Which = ({ whichComponent, setWhichComponent }) => {
  return (
    <div className=' p-2 rounded d-flex align-items-center gap-4 mt-5' style={{ maxWidth: "200px" }}>
      <span className={`${whichComponent === 'cats' && "bg-primary"} px-2 py-2 rounded-3  `} role='button' onClick={()=>setWhichComponent('cats')} >Categoies</span>
      <span className={`${whichComponent === 'list' && "bg-primary"} px-2 py-2 rounded-3  `} role='button' onClick={()=>setWhichComponent('list')}>List</span>
    </div>
  )
}

export default Which