import {useParams, Navigate } from 'react-router-dom';
import logements from '../data/data.json'
import Carrousel from './Carrousel';
import Tag from './Tag';


import './ficheLogement.scss';

function FicheLogement(){
    // Récupérer le bon id pour générer une page par logement
    let logementId = useParams('id').id;
	let ficheLogement = logements.find(logement => logement.id === logementId);
    console.log(logementId)

    // Tags
    let tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} label={tags} />;
    });

    // Équipements
    let equipements = ficheLogement?.equipments.map((equipment, i) => {
        return (
        <ul key={i}>
            <li>{equipment}</li>
        </ul>
        );
    });

    return(
        <>
        <Carrousel />
        <div>hello logement</div>
        <Tag
        label={tagsLogement} 
        />
        
        </>
    )

}

export default FicheLogement