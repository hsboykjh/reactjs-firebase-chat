import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <div className="navStyle">
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/ChatRoomRDB'>Chat Firebase</Link></a>
                <a><Link to='/ChatRoomFS'>Chat Firestore</Link></a>
            </div>
        </nav>
    </header>
);

export default Header
