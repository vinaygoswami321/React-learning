import { Outlet , Link } from "react-router-dom";

function Layout(){
  return(
      <>
       <Link to='/'/>
        <Outlet />
      </>
  )
}

export default Layout;