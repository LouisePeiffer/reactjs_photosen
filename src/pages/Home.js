import React, { Fragment } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards' 
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Fragment>
                <Header/>
                <Cards/>
                <Footer/>
            </Fragment>
        </div>
    )
}
