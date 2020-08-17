import React from 'react';
import './navbar.css';
  class Navbar extends React.Component
  {
      render()
      {
          return(
          <div>
            <div className="topnav">
             <a className="active" href="Google.com">Home</a>
             <a href="Google.com">Login</a>
               <a href="Google.com">Logout</a>
            </div>
          </div>
          )
      }
  }
  export default Navbar;