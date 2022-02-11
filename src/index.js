import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/layout"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
function App(){
    return(
        <>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                 <Route index element={<Home />}></Route>
              </Route>
          </Routes>
         </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));