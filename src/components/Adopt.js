import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'

import noImage from '../images/no-image.png'

const Adopt = () => {
    const [adoptionList, setAdoptionList] = useState(undefined)

    const breedRef = useRef(null)
    const zipRef = useRef(null)

    // useEffect(() => {
    //     axios.get(`https://api.petfinder.com/v2/animals?type=dog&location=20722&breed=husky&page=1`, {
    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
    //         }
    //     }).then((data) => {
    //         console.log(data.data)
    //         setAdoptionList(data.data.animals)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    function petFinderRedirect(url) {
        window.open(url, '_blank')
    }

    function searchError() {
        zipRef.current.style.border = '1px solid red'
        breedRef.current.style.border = '1px solid red'
    }
    
    function searchConfirm() {
        zipRef.current.style.border = '1px solid black'
        breedRef.current.style.border = '1px solid black'
    }

    function adoptionSearch() {
        if(breedRef.current.value && zipRef.current.value) {
            axios.get(`https://api.petfinder.com/v2/animals?type=dog&location=${zipRef.current.value}&breed=${breedRef.current.value}&page=1`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                }
            }).then((data) => {
                console.log(data.data)
                setAdoptionList(data.data.animals)
                searchConfirm()
            }).catch((error) => {
                console.log(error)
                searchError()
            })
        } else if(breedRef.current.value) {
            axios.get(`https://api.petfinder.com/v2/animals?type=dog&breed=${breedRef.current.value}&page=1`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                }
            }).then((data) => {
                console.log(data.data)
                setAdoptionList(data.data.animals)
                searchConfirm()
            }).catch((error) => {
                console.log(error)
                breedRef.current.style.border = '1px solid red'
            })
        } else if(zipRef.current.value) {
            axios.get(`https://api.petfinder.com/v2/animals?type=dog&location=${zipRef.current.value}&page=1`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                }
            }).then((data) => {
                console.log(data.data)
                setAdoptionList(data.data.animals)
                searchConfirm()
            }).catch((error) => {
                console.log(error)
                zipRef.current.style.border = '1px solid red'
            })
        } else {
            searchError()
        }
    }

    function test() {
        console.log(adoptionList)        
    }

    return (
        <section className="adoption-section">
            <div className="adoption-input-container">
                <input type="text" placeholder='Breed' ref={breedRef} />
                <input type="text" placeholder='Zip Code' ref={zipRef} />
                <button type='button' onClick={adoptionSearch}>Search</button>
            </div>
            <main className="adoption-container">
                {/* <button type='button' onClick={test}>Test</button> */}
                {adoptionList === undefined ? <BeatLoader size={40} css={'align-self: flex-start;'} /> : adoptionList.map(list => {
                    return (
                        <div className="dog-info-container" onClick={() => petFinderRedirect(list.url)}>
                            <img className='dog-image' src={list.primary_photo_cropped !== null ? list.primary_photo_cropped.small :  noImage} alt="" />
                            <div className="dog-info">
                                <h2 className="dog-name">{list.name}</h2>
                                <div className="dog-adult-breed">
                                    <h3 className="dog-age">{list.age}</h3>
                                    <h3 className="dog-breed">{list.breeds.primary}</h3>
                                </div>
                                <h2 className="dog-distance">{list.distance !== null ? `${Math.round(list.distance)} miles away` : '' }</h2>
                            </div>
                        </div>
                    )
                }) }
            </main>
        </section>
    )
}

export default Adopt
