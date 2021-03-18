import React, { Fragment } from 'react'
import Header from '../components/Header'
import Formulaire from '../components/Formulaire'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <Fragment>
            <Header/>
            <section className="contact">
                <h1>Contact</h1>
                <Formulaire/>
            </section>
            <Footer/>
        </Fragment>
    )
}
