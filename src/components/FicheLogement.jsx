import {useParams, Navigate } from 'react-router-dom';
import logements from '../data/data.json'
import Carrousel from './Carrousel';
import Tag from './Tag';


import './ficheLogement.scss';

function FicheLogement(){
    // Récupérer le bon id pour générer une page par logement
    let { logementId } = useParams();
    let ficheLogement = logements.find((logement) => logement.id === logementId);

    // Tags
    const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
    });

    // Équipements
    const equipements = ficheLogement?.equipments.map((equipment, i) => {
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
        </>
    )

}

export default FicheLogement