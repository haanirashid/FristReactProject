import React from 'react';
import { Nav } from '../../Global';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    let login_stat = localStorage.getItem("loginStatus");
    let navi = useNavigate()
    let handle_signout=()=>{
        localStorage.removeItem("loginStatus");
        navi("/")
    }

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <Link to='/'>
                        <h1>Practice Website React</h1>
                    </Link>
                </div>
                <div className="mid">
                    <input type="text" placeholder='Search' />
                    <button>Search</button>
                </div>
                <div className="right">
                    <ul>
                        {
                            Nav.map((value, index) => {
                                return (
                                    <li key={index} ><NavLink to={value.url}>{value.title}</NavLink></li>
                                )
                            })
                        }
                        {

                            !login_stat?
                            
                            <li><NavLink to='/'>Login</NavLink></li>
                            :
                            
                            <li onClick={handle_signout}><NavLink >SignOut</NavLink></li>
                            
                            
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar