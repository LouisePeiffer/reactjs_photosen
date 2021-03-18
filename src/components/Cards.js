import React, {useState, useEffect, data} from 'react'
import {NavLink} from 'react-router-dom'

export default function Cards() {
        const [chemin, setChemin] = useState("")
        useEffect(() => {
            let random = () => {
                let copieUrl = chemin
                copieUrl = Math.round(Math.random()*(2-1)+1)
                setChemin(copieUrl);
            }
            random();
        }, [chemin]);

        const data = [
            {titre: 'Nature', link:'images/img_1.jpg'},
            {titre: 'Portrait', link:'images/img_2.jpg'},
            {titre: 'People', link:'images/img_3.jpg'},
            {titre: 'Architecture', link:'images/img_4.jpg'},
            {titre: 'Animals', link:'images/img_5.jpg'},
            {titre: 'Sport', link:'images/img_6.jpg'},
            {titre: 'Travel', link:'images/img_7.jpg'},
            {titre: 'People', link:'images/img_2.jpg'},
            {titre: 'Architecture', link:'images/img_3.jpg'},
        ]

        return (
            <main className='main'>
                {data.map((el,i) => {
                    return (
                        <div key={i} className='card'>
                            <div className="image-info">
                                <h2 className="mb-3">{el.titre}</h2>
                                <NavLink to={`gallery${chemin}`} exact>
                                    More photos
                                </NavLink>
                            </div>
                            <img src={el.link} alt="catergo" className='img-fluid'/>
                        </div>
                    )
                    })}
            </main>
        )
    }