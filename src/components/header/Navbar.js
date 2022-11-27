import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'

//style
import CS from './Navbar.module.scss'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className={CS.navbar}>
                <FaCoins className={CS.icon} />
                <h1> Coin <span className={CS.purple}>Project</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
