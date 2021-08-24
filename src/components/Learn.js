import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"
import BarLoader from "react-spinners/ClipLoader"

import placeholder from '../images/dog-placeholder2.jpg'

const Learn = () => {
    const [isOn, setIsOn] = useState(false)
    const [breed, setBreed] = useState(undefined)
    const [currentBreed, setCurrentBreed] = useState(undefined)

    useEffect(() => {
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=husky`, {
            headers: {
                'X-Api-Key': `${process.env.REACT_APP_DOG_API_KEY}`
            }
        }).then((data) => {
            setBreed(data.data)
            setCurrentBreed(data.data[0])
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    function getCurrentBreed(e) {
        for(let i = 0; i < breed.length; i++) {
            if(breed[i].name === e.target.value) {
                setCurrentBreed(breed[i])
            }
        }
    }

    function test() {
        // setIsOn(!isOn)
        // console.log(isOn)
        console.log(breed)
        console.log(currentBreed)
    }

    return (
        <section className="information-section">
            <button type='button' onClick={test}>Test</button>
            {breed === undefined ? <ClipLoader size={150} /> : 

                <React.Fragment>
                    <div className="breed-selection-container">
                        <label htmlFor="breed" className="select-text">Select Breed: </label>
                        <select name="breed" id="breed" className="select-breed" onChange={e => getCurrentBreed(e)}>
                            {breed.map(breeds => {
                                return <option value={breeds.name} key={breeds.id} >{breeds.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="breed-info-container">
                        <img className='breed-image' src={placeholder} alt="" />
                        <div className="breed-info">
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
                                <h3 className="breed-name">{currentBreed !== undefined ? currentBreed.name : <BarLoader size={150} /> }</h3>
                                <h3 className="breed-group">{currentBreed !== undefined ? currentBreed.breed_group : <BarLoader size={150} />}</h3> 
                                <h3 className="bred-for">{currentBreed !== undefined ? currentBreed.bred_for : <BarLoader size={150} />}</h3>
                                <h3 className="height">{currentBreed !== undefined ? currentBreed.height.imperial : <BarLoader size={150} />} cm</h3>
                                <h3 className="weight">{currentBreed !== undefined ? currentBreed.height.weight : <BarLoader size={150} />} kgs</h3>
                                <h3 className="life-span">{currentBreed !== undefined ? currentBreed.life_span : <BarLoader size={150} />}</h3>
                                <h3 className="temperment">{currentBreed !== undefined ? currentBreed.temperament : <BarLoader size={150} />}</h3>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </section>
    )
}

export default Learn