import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;