import React from "react";
import logopic from './SIGNATURElogo.jpg'
import './Header.css'
// import pic1 from './imgpsh_fullsize_anim (1).jpg'
import { NavLink } from "react-router-dom";
// import pic2 from './imgpsh_fullsize_anim.jpg'


const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <nav>
                    <div className="logo">
                        <img src={logopic} alt="no logo"></img>
                    </div>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>

                        <li> <NavLink to="/about">About us</NavLink> </li>
                       
                        <li> <NavLink to="/Product">Product</NavLink></li>
                    
                        <li> <NavLink to="/Register">Register</NavLink></li>

                        <li> <NavLink to="/Login">Login</NavLink></li>

                        <li><NavLink to="/Contact" >Contact </NavLink></li>

                        <li><NavLink to="/UserList"><i class="fa-solid fa-user"></i>UserList</NavLink> </li>
                    </ul>


                    <div className="icon">
                        {/* <i class="fa-solid fa-user"></i> */}
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </nav>
            </div>

            

        </React.Fragment>
    )
}

export default Header;