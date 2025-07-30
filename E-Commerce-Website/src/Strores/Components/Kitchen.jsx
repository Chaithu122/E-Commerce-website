import React from 'react'
import {kitchenData} from '../Data/kitchen'
import { Link } from 'react-router-dom'
const Kitchen = () => {
     const firstFiveImages=kitchenData.slice(0,5)
  return (
        <>
   <div className='proTitle'>
     <h2>Kitchen</h2>
     </div>
   
      <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                      <Link to='/kitchen'>
                        <img className='proImage' src={item.image} alt={item.name}/>
                        </Link>
                        </div>
                       
                )
              
            })

            
        }

    </div>
    </>
  )
}

export default Kitchen
