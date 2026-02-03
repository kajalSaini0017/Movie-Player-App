import { NavLink, Outlet } from 'react-router'
import { IoMdSearch } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import '../App.css'
function Navbar() {
    return (
        <>
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
                        <NavLink to="/categories"><TbGridDots className='icon' /></NavLink>
                    </div>
                    <div>
                        <NavLink to="/signin"><CgProfile className='icon' /></NavLink>
                    </div>

                </div>

            </div>
            <Outlet />
        </>
    )
}
export default Navbar;