import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo (7).png"
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }


    const [navItems, setnavItems] = useState([
        {title : "Jewelry & Accessories", path:"/" },
        {title : "Clothing & Shoes", path:"/"},
        {title : "Home & Living", path:"/" },
        {title : "Wedding & Party", path:"/"},
        {title : "Toys & Entertainment", path:"/"},
        {title : "Art & Collectibles", path:"/"},
        {title : "Craft Supplies & Tools", path:"/"},

    ])
  return (
    <>
   <header className='max-w-screen-2xl xl:px-28 px-4'>

   <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
   
   <FaSearch  className='text-black size-5 cursor-pointer hidden md:block' />

   <a href=""><img src={logo} alt="" /></a>

   <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
    <a href="" className='flex items-center gap-2'>   <FaUser />Account</a>
    <a href="" className='flex items-center gap-2'>   <FaShoppingBag />Shopping</a>
   </div>


   <div className='md:hidden block'>
    <button onClick={() =>toggleMenu()}>
      {
        isMenuOpen ? <FaTimes className='size-5 text-black' /> : <FaBars className='size-5 text-black' />
      }</button>
   </div>

   </nav>

     <hr />


     <div className='pt-4'>
       <ul className='lg:flex items-center justify-between text-black hidden'>
        {navItems.map(({title, path}) => (
            <li key={title} className='hover:text-orange-500'>
                <Link to="/">{title}</Link>
            </li>
        ) )}
       </ul>

     </div>


{/* for sm screens */}

<div>
<ul className={`bg-black text-white px-4 py-2 rounded md:hidden  ${isMenuOpen ? "" : "hidden"}`}>
        {navItems.map(({title, path}) => (
            <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                <Link to="/">{title}</Link>
            </li>
        ) )}
       </ul>
</div>



   </header>
    </>
  )
}

export default Navbar
