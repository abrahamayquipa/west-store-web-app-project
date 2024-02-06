import { HashRouter, NavLink } from 'react-router-dom'
import React, { useState } from 'react'

import ShadowWindow from './ShadowWindow'

import SearcherTextField from './SearcherTextField'
import Searcher from './Searcher'

const Navbar: React.FC = () => {
    const [menuButton, setMenuButton] = useState(false)
    const [searcherButton, setSearcherButton] = useState(false)

    const toggleMenu = () => {
        setMenuButton(!menuButton)
    }

    const toogleSearcher = () => {
        setSearcherButton(!searcherButton)
    }

    return (
        <HashRouter>
            <nav className='h-16 sm:h-24 c-navbar-container'>
                <div className='grid grid-cols-7 sm:grid-cols-12 gap-4 h-16 sm:h-24 px-8 container mx-auto relative z-50 c-navbar'>
                    {
                        menuButton
                            ? <i className='iconsax col-span-1 sm:hidden self-center' icon-name='x' onClick={toggleMenu}></i>
                            : <i className='iconsax col-span-1 sm:hidden self-center' icon-name='hamburger-menu' onClick={toggleMenu}></i>
                    }
                    <span className='col-span-2 xl:col-span-1 text-2xl sm:text-3xl u-extra-bold-font self-center'>WEST.CO</span>
                    <ul className='hidden lg:flex lg:col-start-3 lg:col-end-8 xl:col-start-2 justify-evenly items-center'>
                        <li>
                            <NavLink to='/' className='u-regular-font'> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className='u-regular-font'> On Sale</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className='u-regular-font'> New Arrivals</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className='u-regular-font'> Brands</NavLink>
                        </li>
                    </ul>
                    {
                        searcherButton
                            ?
                                <>
                                    {menuButton === true && setSearcherButton(false)}
                                    <i className='iconsax col-start-5 col-end-6 sm:hidden justify-self-end self-center' icon-name='x' onClick={toogleSearcher}></i>
                                    <SearcherTextField/>
                                </>
                            : <i className='iconsax col-start-5 col-end-6 justify-self-end self-center sm:hidden' icon-name='search-normal-2' onClick={() => {toogleSearcher(); setMenuButton(false)}}></i>
                    }
                    <Searcher className='hidden sm:block col-start-3 col-end-6 sm:col-start-4 sm:col-end-11 lg:col-start-8 lg:col-end-12'/>
                    <section className='hidden lg:flex lg:col-start-12 lg:col-end-13 justify-evenly items-center'>
                        <i className='iconsax' icon-name='basket-1'></i>
                        <i className='iconsax' icon-name='user-2-circle'></i>
                    </section>
                    <i className='iconsax col-start-6 col-end-7 sm:col-start-11 sm:col-end-12 lg:hidden justify-self-end self-center' icon-name='basket-1'></i>
                    <i className='iconsax col-start-7 col-end-8 sm:col-start-12 sm:col-end-13 lg:hidden justify-self-end self-center' icon-name='user-2-circle'></i>
                </div>
                <ul className={`z-40 ${menuButton ? 'c-ul--contracted' : 'hidden'}`}>
                    <li className='c-navbar__li lg:hidden'>
                        <NavLink to='/'>Vacio</NavLink>
                    </li>
                    <li className='c-navbar__li'>
                        <i className='iconsax' icon-name='home-1'></i>
                        <NavLink to='/' className='u-regular-font'> Home</NavLink>
                    </li>
                    <li className='c-navbar__li'>
                        <i className='iconsax' icon-name='tag-2'></i>
                        <NavLink to='/' className='u-regular-font'> On Sale</NavLink>
                    </li>
                    <li className='c-navbar__li'>
                        <i className='iconsax' icon-name='box-tick'></i>
                        <NavLink to='/' className='u-regular-font'> New Arrivals</NavLink>
                    </li>
                    <li className='c-navbar__li'>
                        <i className='iconsax' icon-name='building-2'></i>
                        <NavLink to='/' className='u-regular-font'> Brands</NavLink>
                    </li>
                </ul>
                {
                    menuButton
                        ? <ShadowWindow state='z-30 c-shadow-window' onClick={toggleMenu}/>
                        : <ShadowWindow state='hidden'/>
                }
            </nav>
        </HashRouter>
    )
}

export default Navbar;