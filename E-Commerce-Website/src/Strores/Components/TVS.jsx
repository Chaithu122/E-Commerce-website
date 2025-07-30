import React from 'react'
import {tvData} from '../Data/tv'
import { Link } from 'react-router-dom'


const TVS = () => {
     const firstFiveImages=tvData.slice(0,5)
  return (
     <>
   <div className='proTitle'>
     <h2>TV</h2>
     </div>
   
      <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                        <Link to='/tv'>
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

export default TVS
