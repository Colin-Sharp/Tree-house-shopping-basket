import React from 'react';
import { Link } from 'react-router-dom';
 const Navbar = ()=> {
   return(
     <nav className="nav-wrapper">
       <div className="container">
       <Link to="/" className="brand-logo left" >DreamTree</Link>
         <ul className="right">
           <li><Link to="/"  >Tree Houses</Link></li>
           <li><Link to="/basket" >basket</Link></li>
           <li><Link to="/basket" ><i className="shopping basket icon"></i></Link></li>
         </ul>
       </div>
         
     </nav>
   )
 } 

 export default Navbar;