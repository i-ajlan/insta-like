import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import "./Header.css"

function Header() {
  return (<>
    <header className='header'>
        <div className='header_Logo'>
            Insta-Like
        </div>
        <div className='header_search-bar'>
            <input type="text" placeholder="Search other profiles" name="" id="" />
        </div>
         <nav>
            <NavLink className={({isActive})=>isActive?"navlink is_active":"navlink"} to="/trending">trending</NavLink>
            <NavLink className={({isActive})=>isActive?"navlink is_active":"navlink"} to="/feed">feed</NavLink>
            <NavLink className={({isActive})=>isActive?"navlink is_active":"navlink"} to="/myProfile">MyProfile</NavLink>
        </nav>
    </header>
      <Outlet/>
  </>
  )
}

export default Header