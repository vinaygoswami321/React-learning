import React from "react";



const Navbar = (props) => {
    const totalItems = props.totalItems;

    return(
        <>
       <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
     <span className={"text-white fs-3"}>Navbar</span>
     <span className={"text-white fs-3 badge badge=pill m-2 bg-primary"}>{totalItems}</span>
    </div>
    </nav>
    </>
    );
}



export default Navbar;