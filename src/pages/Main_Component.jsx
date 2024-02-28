import React from 'react'
import { Navbar_Component } from '../components/Navbar_Component'
import { Home } from './Home'

const Main_Components = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-400'>
            <Navbar_Component />
            < Home />
        </div>
    )
}
export { Main_Components }
