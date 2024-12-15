import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
    const {fecthImageByCategory ,setQuery} = useContext(PixabayContext);
  return (
    <>
    <div className='container text-center my-3'>
        <button onClick={()=> fecthImageByCategory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
<button onClick={()=> fecthImageByCategory("science")} type="button" className="btn btn-outline-secondary mx-3">Science</button>
<button onClick={()=> fecthImageByCategory("computer")} type="button" className="btn btn-outline-success mx-3">Computer</button>
<button onClick={()=> fecthImageByCategory("buildings")} type="button" className="btn btn-outline-danger mx-3">Buildings</button>
<button onClick={()=> fecthImageByCategory("sport")} type="button" className="btn btn-outline-warning mx-3">Sport</button>
<button onClick={()=> fecthImageByCategory("transportation")} type="button" className="btn btn-outline-info mx-3">Transportation</button>
<button onClick={()=> fecthImageByCategory("travel")} type="button" className="btn btn-outline-success mx-3">Travel</button>
<button onClick={()=> fecthImageByCategory("food")} type="button" className="btn btn-outline-dark mx-3">Food</button>
    </div>

    {/* <div className="container" style={{width:'800px'
    }}>
    <input type="text" className="form-control"> </input>
    </div> */}
    <div className='container' style={{width:'800px'}}>
        <input type="text" onChange={(e)=> setQuery(e.target.value)} className="form-control bg-dark text-light"></input>
        </div>

    </>
  )
};

export default Navbar