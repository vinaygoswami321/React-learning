import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
const Layout = () => {
  return (
    <>
      <nav className={"navbar navbar-dark bg-secondary sticky-top"}>
        <ul className={"list-group list-group-horizontal navbar-nav mr-auto"}>
          <li>
            <Link to="/"> <h1 className={"badge bg-primary m-2 fs-6"}>Home</h1></Link>
          </li>
          <li>
            <Link to="/blogs"> <h1 className={"badge bg-primary m-2 fs-6 "}>Blogs</h1></Link>
          </li>
          <li>
            <Link to="/contact"> <h1 className={"badge bg-primary m-2 fs-6"}>Contact</h1></Link>
          </li>
          <li>
            <Link to="/nowhere/here"> <h1 className={"badge bg-primary m-2 fs-6 "}>Nowhere</h1></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
