import React, { useState, useRef } from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import Home from './Home'
import Adopt from './Adopt'
import Learn from './Learn'
import Shop from './Shop'
import Contact from './Contact'
import Footer from './Footer'

import logo from '../images/logo.png'

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')

    const burgerContainerRef = useRef(undefined)
    const hamburgerMenuRef = useRef(undefined)
    const breedInputRef = useRef(undefined)

    function openAndCloseMenu(e) {
        if(!isOpen) {
            menuOpen()
        } else {
            menuClose(e)
        }
    }

    function menuSearch(e) {
        menuClose(e)
    }
    
    function menuOpen() {
        setIsOpen(true)
        burgerContainerRef.current.classList.remove('close')
        burgerContainerRef.current.classList.add('open')
        hamburgerMenuRef.current.style.visibility = 'visible'
        hamburgerMenuRef.current.style.width = `${window.innerWidth}px`
        hamburgerMenuRef.current.style.transform = `translateX(${window.innerWidth - window.innerWidth}px)`
    }

    function menuClose(e) {
        setIsOpen(false)
        burgerContainerRef.current.classList.remove('open')
        burgerContainerRef.current.classList.add('close')
        hamburgerMenuRef.current.style.visibility = 'hidden'
        hamburgerMenuRef.current.style.transform = `translateX(${window.innerWidth}px)`
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflowY = 'visible'
    }

    function navBreedSearch() {
        setInput(breedInputRef.current.value)
        breedInputRef.current.value = ''
    }

    function preventDefaultAction(e) {
        e.preventDefault()
    }

    return (
        <React.Fragment>
            <aside className="hamburger-menu hidden" ref={hamburgerMenuRef}>
                <div className="menu-links">
                    <h2 className='menu-main-link'><i className="far fa-user"></i> Log-in</h2>
                    <div className="menu-input-container">
                        <input className='menu-input' type="text" placeholder='Breed' />
                        <input className='menu-input' type="text" placeholder='Zip Code' />
                        <Link to='/adopt'>
                            <button className="search-button" onClick={e => menuSearch(e)}><i className="fas fa-search"></i></button>
                        </Link>
                    </div>
                    <div className="menu-secondary-links-container">
                        <Link to='/'>
                            <h3>Home</h3>
                        </Link>
                        <Link to='/adopt'>
                            <h3 onClick={e => menuClose(e)}>Adopt</h3>
                        </Link>
                        <Link to='/learn'>
                            <h3 onClick={e => menuClose(e)}>Breed Info</h3>
                        </Link>
                        <Link to='/shop'>
                            <h3>Shop</h3>
                        </Link>
                        <Link to='/contact'>
                            <h3>Contact</h3>
                        </Link>
                    </div>
                </div>
            </aside>
            <nav className="navigation-bar">
                <header className="navigation-bar-header">
                    <div className="burger-container" onClick={e => openAndCloseMenu(e)} ref={burgerContainerRef}>
                        <div className="burger"></div>
                    </div>
                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <div className="header-title-container">
                            <img className='header-logo' src={logo} alt="Logo" />
                            <h2 className="header-name">git-A-Pup</h2>
                            <h3 className="header-store">Dog Adoption</h3>
                        </div>
                    </Link>
                </header>
                <div className="navigation-bar-links-container">
                    <div className="navigation-bar-links">
                        <Link to='/'>
                            <h4>Home</h4>
                        </Link>
                        <Link to='/adopt'>
                            <h4>Adopt</h4>
                        </Link>
                        <Link to='/learn'>
                            <h4>Breed Info</h4>
                        </Link>
                        <Link to='/shop'>
                            <h4>Shop ( <span className="shopping-cart-number">0</span> ) </h4>
                        </Link>
                        <Link to='/contact'>
                            <h4>Contact</h4>
                        </Link>
                    </div>
                    <div className="navigation-search-bar">
                        <input type="text" placeholder='Enter Breed...' ref={breedInputRef} />
                        <Link to='/learn'>
                            <button className="search-button" type='button' onClick={() => navBreedSearch()} ><i className="fas fa-search"></i></button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/adopt' component={Adopt} />
                <Route path='/learn' render={(props) => <Learn {...props} breedInput={input} />} />
                <Route path='/shop' component={Shop} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default NavigationBar