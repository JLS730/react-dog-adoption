import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { BeatLoader } from "react-spinners"

import noImage from '../images/no-image.png'

const Learn = ({ breedInput }) => {
    const [breed, setBreed] = useState(undefined)
    const [currentBreed, setCurrentBreed] = useState(undefined)
    const [input, setInput] = useState('')

    const breedInputRef = useRef(undefined)
    const breedImageRef = useRef(undefined)
    
    useEffect(() => {
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breedInput}`, {
            headers: {
                'X-Api-Key': `${process.env.REACT_APP_DOG_API_KEY}`
            }
        }).then((data) => {
            setBreed(data.data)
            setCurrentBreed(data.data[0])
        }).catch((error) => {
            console.log(error)
        })

        console.log(breedInput)
    }, [breedInput])

    function getCurrentBreed(e) {
        for(let i = 0; i < breed.length; i++) {
            if(breed[i].name === e.target.value) {
                setCurrentBreed(breed[i])
            }
        }
    }

    function breedSearch(e) {
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${input}`, {
            headers: {
                'X-Api-Key': `${process.env.REACT_APP_DOG_API_KEY}`
            }
        }).then((data) => {
            setBreed(data.data)
            setCurrentBreed(data.data[0])
        }).catch((error) => {
            console.log(error)
        })

        breedInputRef.current.value = ''
        
        setTimeout(() => {
            breedImageRef.current.style.visibility = 'visible'
        }, 500)
    }

    function test() {
        console.log(currentBreed)
    }

    function getImageUrl() {
        if(currentBreed !== undefined) {
            let url = `https://cdn2.thedogapi.com/images/${currentBreed.reference_image_id}.jpg`

            if(url === 'https://cdn2.thedogapi.com/images/undefined.jpg') {
                return noImage
            }

            return url
        } else {
            return noImage
        }
    }

    return (
        <section className="information-section">
            {/* <button type='button' onClick={test}>Test</button> */}
            <div className="breed-input-container">
                <input type="text" placeholder='Enter Breed' ref={breedInputRef} onChange={e => setInput(e.target.value)} />
                <button type='button' onClick={e => breedSearch(e)}><i className="fas fa-search"></i></button>
            </div>
            {breed === undefined ? <BeatLoader size={30} /> : 

                <React.Fragment>
                    {/* <div className="breed-selection-container">
                        <label htmlFor="breed" className="select-text">Breed: </label>
                        <select name="breed" id="breed" className="select-breed" onChange={e => getCurrentBreed(e)}>
                            {breed.map(breeds => {
                                return <option value={breeds.name} key={breeds.id} >{breeds.name}</option>
                            })}
                        </select>
                    </div> */}
                    <div className="breed-info-container">
                        <img className='breed-image' src={getImageUrl()} alt="" ref={breedImageRef} />
                        <div className="breed-info">
                            <div className="breed-info-left">
                                <h2 className="breed-about">About</h2>
                                <div className="breed-name-container">
                                    <h4 className="breed-name">Breed: </h4>
                                    <select name="breed" id="breed" className="select-breed" onChange={e => getCurrentBreed(e)}>
                                        {breed.map(breeds => {
                                            return <option value={breeds.name} key={breeds.id} >{breeds.name}</option>
                                        })}
                                    </select>
                                </div>
                                <h4 className="breed-group">Group: {currentBreed !== undefined && currentBreed.breed_group}</h4>
                                <h4 className="height">Height: {currentBreed !== undefined && `${currentBreed.height.imperial} cm`}</h4>
                                <h4 className="weight">Weight: {currentBreed !== undefined && `${currentBreed.weight.imperial} kgs`}</h4>
                                <h4 className="life-span">Life Span: {currentBreed !== undefined && currentBreed.life_span}</h4>
                                <div className="bred-for-container">
                                    <h4 className="bred-for">Bred For: </h4>
                                    <h4 className="bred-for-details">{currentBreed !== undefined && currentBreed.bred_for}</h4>
                                </div>
                                <div className="temperament-container">
                                    <h4 className="temperament">Peronality: </h4>
                                    <h4 className="temperament-details">{currentBreed !== undefined && currentBreed.temperament}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </section>
    )
}

export default Learn