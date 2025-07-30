import React from 'react'
import {Link} from 'react-router-dom'
import { useCart } from './Context/CartContext'
const NavBar = () => {
   const {cartItems }= useCart()
  return (
    <>
   
   <div className="navSection">
    <div className="title">
        <h2>E-Mart</h2>
    </div>
    <div className="search">
        <input type="text" placeholder='Search...'/>
    </div>
    <div className="user">
        <div className="user-details">
            SignIN/SignUp
        </div>
        <Link to='/cart'>
         <div className="cart">
            Cart
        </div>
        </Link>
        <span>
          {cartItems.length}
        </span>
       
    </div>
   </div>
   <div className="subMenu">
    <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
        
        <Link to='/watches'> 
        <li>Watches</li>
        </Link>
       
        <Link to='/men'>
         <li>MenFashion</li>
        </Link>
       
       <Link to='/woman'>
        <li>WomanDressing</li>
       </Link>
       
       <Link to='/furniture'>
       <li>Furniture</li>
       </Link>
        
        <Link to='/ac'>
        <li>AC</li>
        </Link>
        
        <Link to='/kitchen'>
         <li>Kitchen</li>
        </Link>
       
       <Link to='/books'>
        <li>Books</li>
       </Link>
      
       <Link to='/fridge'>
        <li>Fridge</li>
       </Link>
      
       <Link to='/speakers'>
    <li>Speakers</li>
       </Link>
     
     <Link to='/tvs'>
      <li>TVs</li>
      </Link>
       
    </ul>
   </div>
    </>
  )
}

export default NavBar
