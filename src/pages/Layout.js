import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Layout extends Component{
    render(){
        return(
            <>  <Navigation />
                <Outlet />
                <Footer />
            </>
        )
    }
}
export default Layout;