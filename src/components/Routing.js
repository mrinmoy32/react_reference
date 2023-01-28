import React from 'react'
import './Styles.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>  
                <Route path="/" element={<Home />} /> 
                {/* in earlier version Switch was used in place of Routes and componenet was used in place of element */}
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>



    )
}

export default Routing

function Home() {
    return (
        <>
        <h1 className='demo'>Home component</h1>
        <h1 className='demo'>Home component</h1>
        <h1 className='demo'>Home component</h1>
        <h1 className='demo'>Home component</h1>
        <h1 className='demo'>Home component</h1>
        <h1 className='demo'>Home component</h1>
        </>
        
    )
}
function About() {
    return (
        <h1 className='demo1'>About component</h1>
    )
}
function Users() {
    return (
        <h1 className='demo2'>Users component</h1>
    )
}
