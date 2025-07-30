import React from 'react'
import {watchData} from '../Data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {
     const firstFiveImages = watchData.slice(0,5)
  return (
    <>
   <div className='proTitle'>
     <h2>Watch</h2>
     </div>
   
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                      <Link to='/watch'>
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

export default Watch
