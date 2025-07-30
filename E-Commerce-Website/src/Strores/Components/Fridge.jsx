import React from 'react'
import {fridgeData} from '../Data/fridge'
import { Link } from 'react-router-dom'

const Fridge = () => {
     const firstFiveImages = fridgeData.slice(0,5)
  return (
      <>
 <div className='proTitle'>
     <h2>Fridge</h2>
     </div>
   
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                        <Link to='/FRIDGE'>
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

export default Fridge
