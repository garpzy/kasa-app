import {useParams, Navigate } from 'react-router-dom';

import './rating.scss'
import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";
import logements from "../data/data.json"

function Rating({note}){
    // Récupérer le bon id pour générer une page par logement
    let logementId = useParams('id').id;
    let logement = logements.find(logement => logement.id === logementId);

    let rating = [logement.rating]
    let nbGreyStar = 5-rating;
    console.log(rating)
    console.log(nbGreyStar)
    return(
        <>
        
           <img
              key={rating.toString()}
              className="etoile"
              src={redStar}
              alt="red star"
            />
            
            {<img
              key={rating.toString()}
              className="etoile"
              src={greyStar}
              alt="grey star"
            />}
            
        </>
    )
}

export default Rating