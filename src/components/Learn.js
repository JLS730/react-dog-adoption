import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"

import placeholder from '../images/dog-placeholder2.jpg'

const Learn = ({ breedInput }) => {
    const [isOn, setIsOn] = useState(false)
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
        // setIsOn(!isOn)
        // console.log(isOn)
        // console.log(breed)
        console.log(currentBreed)
        // console.log(breedInput)
    }

    return (
        <section className="information-section">
            {/* <button type='button' onClick={test}>Test</button> */}
            <div className="breed-input-container">
                <input type="text" placeholder='Enter Breed' ref={breedInputRef} onChange={e => setInput(e.target.value)} />
                <button type='button' onClick={e => breedSearch(e)}><i className="fas fa-search"></i></button>
            </div>
            {breed === undefined ? <ClipLoader size={300} /> : 

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
                        <img className='breed-image' src={`https://cdn2.thedogapi.com/images/${currentBreed !== undefined && currentBreed.reference_image_id}.jpg`} alt="" ref={breedImageRef} />
                        {/* <div className="breed-info">
                            <div className="breed-info-left">
                                <h3 className="breed-name">Breed:</h3>
                                <h3 className="breed-group">Breed Group:</h3>
                                <h3 className="bred-for">Breed For:</h3>
                                <h3 className="height">Height:</h3>
                                <h3 className="weight">Weight:</h3>
                                <h3 className="life-span">Life Span:</h3>
                                <h3 className="temperment">Peronality:</h3>
                            </div>
                            <div className="breed-info-right">
                                <h3 className="breed-name">{currentBreed !== undefined && currentBreed.name}</h3>
                                <h3 className="breed-group">{currentBreed !== undefined && currentBreed.breed_group}</h3> 
                                <h3 className="bred-for">{currentBreed !== undefined && currentBreed.bred_for}</h3>
                                <h3 className="height">{currentBreed !== undefined && currentBreed.height.imperial} cm</h3>
                                <h3 className="weight">{currentBreed !== undefined && currentBreed.weight.imperial} kgs</h3>
                                <h3 className="life-span">{currentBreed !== undefined && currentBreed.life_span}</h3>
                                <h3 className="temperment">{currentBreed !== undefined && currentBreed.temperament}</h3>
                            </div>
                        </div> */}
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
                                    <td className="height">{currentBreed !== undefined && currentBreed.height.imperial} cm</td>
                                    <td className="weight">{currentBreed !== undefined && currentBreed.weight.imperial} kgs</td>
                                    <td className="life-span">{currentBreed !== undefined && currentBreed.life_span}&nbsp;</td>
                                    <td className="temperment">{currentBreed !== undefined && currentBreed.temperament}&nbsp;</td>
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