import React from 'react'
import {booksData} from '../Data/books'

const Books = () => {
     const firstFiveImages = booksData.slice(0,5)
  return (
       <>
   <div className='proTitle'>
     <h2>Books</h2>
     </div>
   
      <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                 
                    
                    <div key={item.id} className='imgBox'>
                      
                        <img className='proImage' src={item.image} alt={item.name}/>
                      
                        </div>
                       
                )
              
            })

            
        }

    </div>
    </>
  )
}

export default Books
