import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import placeholder from '../images/dog-placeholder2.jpg'

const Adopt = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [adoptionList, setAdoptionList] = useState([])

    useEffect(() => {
        // axios.get(`https://api.petfinder.com/v2/animals?type=dog&breed=husky&page=1`, {
        //     headers: {
        //         Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
        //     }
        // }).then((data) => {
        //     console.log(data.data)
        // }).catch((error) => {
        //     console.log(error)
        // })
    }, [])

    function test() {
        
    }

    return (
        <section className="adoption-section">
            <div className="adoption-input-container">
                <input type="text" placeholder='Breed' />
                <input type="text" placeholder='Zip Code'/>
                <button>Search</button>
            </div>
            <main className="adoption-container">
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
                <div className="dog-info-container">
                    <img className='dog-image' src={placeholder} alt="" />
                    <div className="dog-info">
                        <h2 className="dog-name">Charlie</h2>
                        <div className="dog-adult-breed">
                            <h3 className="dog-age">Adult</h3>
                            <h3 className="dog-breed">Cane Corso</h3>
                        </div>
                        <h2 className="dog-distance">3 miles away</h2>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Adopt
