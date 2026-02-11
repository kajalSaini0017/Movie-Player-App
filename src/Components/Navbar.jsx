import { NavLink, Outlet } from 'react-router'
import { IoMdSearch } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa6'
import { ImCross } from 'react-icons/im'
import { useState, useEffect } from 'react'
import '../App.css'
function Navbar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className='mainApp'>
            <div className='navbar'>
                <div>
                    <h2>Movie Player</h2>
                </div>
                {width > 540 && (
                    <div className='pages'>
                        <div >
                            <NavLink to="/" end>Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/movies">Movies</NavLink>
                        </div>
                        <div>
                            <NavLink to="/search"><IoMdSearch className='icon' /></NavLink>
                        </div>
                        <div>
                            <NavLink to="/signin"><CgProfile className='icon' /></NavLink>
                        </div>

                    </div>)
                }
                {
                    width <= 540 && (
                        <div className='pages'>
                            <div>
                                <NavLink to="/search"><IoMdSearch className='icon' /></NavLink>
                            </div>
                            <button className='toogle-btn' onClick={() => setOpen(!open)}>
                                <FaBars />
                            </button>
                        </div>

                    )
                }


            </div> {
                width < 540 ? open && (
                    <div className='mobile-menu'> 
                        <div >
                            <NavLink to="/" end onClick={()=>setOpen(false)}>Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/movies" onClick={()=>setOpen(false)} >Movies</NavLink>
                        </div>
                        <div>
                            <NavLink to="/search" onClick={()=>setOpen(false)}>Search</NavLink>
                        </div>
                        <div>
                            <NavLink to="/signin" onClick={()=>setOpen(false)}>SignIn</NavLink>
                        </div>
                    </div>

                ) : ""
            }
            <div className='content'>
                <Outlet />
            </div>

            <div className='footer'>
                <h3>Movie Player</h3>
                <div className='footerterms'>
                    <p>Terms and Privacy Notice</p>
                    <p>Send us feedback</p>
                    <p>Help</p>
                </div>
                <p className='footerpera'>&copy; 2026 Movie Player </p>
            </div>
        </div>
    )
}
export default Navbar;