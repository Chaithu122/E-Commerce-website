import React from 'react'
import {menData} from '../Data/men'
import { Link } from 'react-router-dom'

const Men = () => {
     const firstFiveImages = menData.slice(0,5)
  return (
     <>
     <div className='proTitle'>
     <h2>Men</h2>
     </div>
   
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                        <Link to='/men'>
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

export default Men
