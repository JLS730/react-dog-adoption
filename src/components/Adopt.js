import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'

import noImage from '../images/no-image.png'

const Adopt = () => {
    const [adoptionList, setAdoptionList] = useState(undefined)
    const [pagination, setPagination] = useState(undefined)

    const breedRef = useRef(null)
    const zipRef = useRef(null)
    const pageInputRef = useRef(null)

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
                setPagination(data.data.pagination)
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
                setPagination(data.data.pagination)
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
                setPagination(data.data.pagination)
                searchConfirm()
            }).catch((error) => {
                console.log(error)
                zipRef.current.style.border = '1px solid red'
            })
        } else {
            searchError()
        }
    }

    function previousPage() {
        if(pagination.current_page === 1) {
            return
        } else {
            axios.get(`https://api.petfinder.com${pagination._links.previous.href}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                }
            }).then((data) => {
                setPagination(data.data.pagination)
                setAdoptionList(data.data.animals)
            }).catch((error) => {
                console.log(error)
            })

            pageInputRef.current.value = ''
        }
    }

    function enterPageNumber(e) {
        if(e.target.value < 1 || e.target.value > pagination.total_pages) {
            return
        } else {
            if(pagination._links.next === undefined) {
                axios.get(`https://api.petfinder.com${pagination._links.previous.href.replace(`page=${pagination.current_page - 1}`, `page=${e.target.value}`)}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                    }
                }).then((data) => {
                    setPagination(data.data.pagination)
                    setAdoptionList(data.data.animals)
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                axios.get(`https://api.petfinder.com${pagination._links.next.href.replace(`page=${pagination.current_page + 1}`, `page=${e.target.value}`)}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                    }
                }).then((data) => {
                    setPagination(data.data.pagination)
                    setAdoptionList(data.data.animals)
                }).catch((error) => {
                    console.log(error)
                })

                pageInputRef.current.value = ''
            }
        }
    }
    
    function nextPage() {
        if(pagination.current_page === pagination.total_pages) {
            return
        } else {
            axios.get(`https://api.petfinder.com${pagination._links.next.href}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
                }
            }).then((data) => {
                setPagination(data.data.pagination)
                setAdoptionList(data.data.animals)
            }).catch((error) => {
                console.log(error)
            })

            pageInputRef.current.value = ''
        }
    }

    function test() {
        console.log(pagination)
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
                <button type='button' onClick={test}>Test</button>
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
            {pagination !== undefined && 
                <section className="page-selection-container">
                    <div className="left-arrow-container">
                        <i className="fas fa-chevron-left" onClick={() => previousPage()}></i>
                    </div>
                    <div className="numbers-container">
                        <input type="text" ref={pageInputRef} placeholder={pagination.current_page} onKeyPress={e => {
                            if(e.key === 'Enter') {
                                enterPageNumber(e)
                            }
                        }}/>
                        <h3 className="total-pages">of {pagination.total_pages}</h3>
                    </div>
                    <div className="right-arrow-container">
                        <i className="fas fa-chevron-right" onClick={() => nextPage()}></i>
                    </div>
                </section>
            }
        </section>
    )
}

export default Adopt
