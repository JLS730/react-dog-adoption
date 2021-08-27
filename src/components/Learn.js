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
                    <div className="breed-selection-container">
                        <label htmlFor="breed" className="select-text">Breed: </label>
                        <select name="breed" id="breed" className="select-breed" onChange={e => getCurrentBreed(e)}>
                            {breed.map(breeds => {
                                return <option value={breeds.name} key={breeds.id} >{breeds.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="breed-info-container">
                        <img className='breed-image' src={getImageUrl()} alt="" ref={breedImageRef} />
                        <table className="breed-info">
                            <tbody>
                                <tr className="breed-info-left">
                                    <td className="breed-name">Breed:</td>
                                    <td className="breed-group">Group:</td>
                                    <td className="bred-for">Bred For:</td>
                                    <td className="height">Height:</td>
                                    <td className="weight">Weight:</td>
                                    <td className="life-span">Life Span:</td>
                                    <td className="temperment">Peronality:</td>
                                </tr>
                                <tr className="breed-info-right">
                                    <td className="breed-name">{currentBreed !== undefined && currentBreed.name}&nbsp;</td>
                                    <td className="breed-group">{currentBreed !== undefined && currentBreed.breed_group}&nbsp;</td> 
                                    <td className="bred-for">{currentBreed !== undefined && currentBreed.bred_for}&nbsp;</td>
                                    <td className="height">{currentBreed !== undefined && `${currentBreed.height.imperial} cm`}&nbsp;</td>
                                    <td className="weight">{currentBreed !== undefined && `${currentBreed.weight.imperial} kgs`}&nbsp;</td>
                                    <td className="life-span">{currentBreed !== undefined && currentBreed.life_span}&nbsp;</td>
                                    <td className="temperment">{currentBreed !== undefined && currentBreed.temperament}&nbsp;</td>
                                    <td className="temperment-tooltip">{currentBreed !== undefined && currentBreed.temperament}&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            }
        </section>
    )
}

export default Learn