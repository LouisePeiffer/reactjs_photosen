import React, { Fragment } from 'react'
import Header from '../components/Header'
import Img from '../components/Img'
import Footer from '../components/Footer'

export default function Gallery2() {
    return (
        <Fragment>
            <Header/>
            <div className="gallery">
                <h1 className='titreGallery1'>Portrait Gallery 2</h1>
                <Img/>
            </div>
            <Footer/>
        </Fragment>
    )
}