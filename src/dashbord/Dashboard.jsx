import { useState } from "react";

import { FaBars } from 'react-icons/fa'
import Products from "../dashbord Coponent/Product_section/Products";
const Dashboardhome = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="lg:max-w-[1440px] mx-auto p-4">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FaBars /></label>
                <div className="drawer-content">
                    {/* Page content here */}

                </div>

            </div>
        </div>

    );
};




export default Dashboardhome;