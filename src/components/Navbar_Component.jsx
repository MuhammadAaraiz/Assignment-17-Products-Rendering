import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_Component = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-20 px-3 flex items-center justify-between'>
            <div className='text-5xl text-white font-italic'>
                Home Page
            </div>
            <div className='space-x-3 text-3xl text-white font-medium'>
                <Link to='/login'
                    className='login_Btn'>
                    Sign Out</Link>
            </div>

        </div>
    )
}

export { Navbar_Component }
