import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import SidebarData from './SidebarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={sidebar ? 'navbar active' : 'navbar'}>
                <div className="menu-bars">
                    { sidebar ? 
                        (<HiX onClick={showSidebar} />) :
                        (<HiMenu onClick={showSidebar} />)
                    }
                </div>

                <nav className="nav-menu">
                    <ul className="nav-menu-items">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.name}>
                                    { sidebar ? 
                                        <Link to={item.path}>{item.icon} <span>{item.title}</span></Link> :
                                        <Link to={item.path}>{item.icon}</Link>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )   
}

export default Navbar;
