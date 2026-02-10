import { NavLink, Outlet } from 'react-router'
import { IoMdSearch } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import '../App.css'
function Navbar() {
    return (
        <div className='mainApp'>
            <div className='navbar'>
                <div>
                    <h2>Movie Player</h2>
                </div>
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

                </div>

            </div>
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