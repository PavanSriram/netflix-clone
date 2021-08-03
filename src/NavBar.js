import { useEffect, useState } from 'react'
import logo from './Netflix_Logo_RGB.png'
import './NavBar.css'

const NavBar = () => {

    const [show, handleShow] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`NavBar ${show && "NavBlack"}`}>
            <img
                className='NavBar_logo'
                src={logo}
                alt='Netflix Logo'>
            </img>
            <img 
                className='Avatar'
                src='https://occ-0-1068-92.1.nflxso.net/art/16763/5ef8a49350c96ef8ef702b554285b23e4f616763.png'
                alt='Avatar'>
            </img>
        </div>
    )
}

export default NavBar
