import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Product() {
  const [data, setData] = useState({})

  const fetchData = async () => {
    try {
       const { data: res } = await axios.get(
         'https://immence-production.up.railway.app/api/products'
       )
       setData(res[0])
       console.log(data.descImg)
    } catch (error) {
        console.log(error)
    }
    
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
   <div className='product'>
     
    <div className="innerbox">

     <div className='sideimg'>
      {data.descImg.map((d) => 
       <img src={d} alt='' />
      )}
        
     </div>
    <div className='img'>
        <img src={data.primaryImg} alt="" /> 
    </div>
    </div>
    
      <div className='desc'>
        <h3 className='title'>
          {data.name}
        </h3>
     <p className='ratings'>{ data.ratings}</p>
        <div className=''>
          {data.desc}
        </div>
      </div>
    </div>
  )
}

export default Product
