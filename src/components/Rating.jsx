import {useParams, Navigate } from 'react-router-dom';

import './rating.scss'
import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";
import logements from "../data/data.json"

function Rating(){
    // Récupérer le bon id pour générer une page par logement
    let logementId = useParams('id').id;
    let logement = logements.find(logement => logement.id === logementId);

    let rating = logement.rating
    let nbGreyStar = 5-rating;

    let redStars = Array.from({length: rating}, (_, index) => {
        return (<img
            key={index}
            className="etoile"
            src={redStar}
            alt="red star"
          />);
    })

    let greyStars = Array.from({length: nbGreyStar}, (_, index) => {
        return (<img
            key={index}
            className="etoile"
            src={greyStar}
            alt="red star"
          />);
    })

    return(
        <>
            {redStars}
            {greyStars}
        </>
    )
}

export default Rating


// try : 
// const doubled = numbers.map((number) => number * 2);
