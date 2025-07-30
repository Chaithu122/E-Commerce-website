 
 import React from 'react'
 import {speakerData} from '../Data/speaker'
 const Speakers = () => {
     const firstFiveImages=speakerData.slice(0,5)
   return (
     <>
   <div className='proTitle'>
     <h2>Speakers</h2>
     </div>
   
      <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                        <Link to='/speakers'>
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
 
 export default Speakers
 