import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
    const [navbar, setnavbar] = useState(false)
    return (
        <>
            <header>
                <div className="container paddingSm">
                    <nav>
                        <ul>
                            <h2 className='headi'>NewsViews</h2>
                            <li ><Link to='/home'>Home</Link></li>
                            <li ><Link to='/business'>Business</Link></li>
                            <li ><Link to='/entertainment'>Entertainment</Link></li>
                            <li ><Link to='/general'>General</Link></li>
                            <li ><Link to='/health'>Health</Link></li>
                            <li ><Link to='/sports'>Sports</Link></li>
                            <li ><Link to='/science'>Science</Link></li>
                            <li ><Link to='/technology'>Technology</Link></li>
                            <Link to="/search"> <span class="material-symbols-outlined">
                                search
                            </span></Link>
            
                        </ul>
                       
                    </nav>
                </div>
            </header>
            <marquee>THE LATEST NEWS FROM AROUND THE WORLD</marquee>
        </>
    )
}
export default Navbar