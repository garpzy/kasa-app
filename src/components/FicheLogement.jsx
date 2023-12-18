import {useParams, Navigate } from 'react-router-dom';
import logements from '../data/data.json'
import Carrousel from './Carrousel';
import Tag from './Tag';
import Collapse from './Collapse';
import Rating from './Rating';


import './ficheLogement.scss';

function FicheLogement(){
    // Récupérer le bon id pour générer une page par logement
    let logementId = useParams('id').id;
	let ficheLogement = logements.find(logement => logement.id === logementId);

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

    // Nom et prénom séparés sur deux lignes
    const name = ficheLogement.host.name.split(' '); 


    return(
        <>
        <Carrousel pictures={ficheLogement.pictures}/>
        <div className='info'>
            <div className='info-main'>
                <div className='title'>{ficheLogement.title}</div>
                <div className='location'>{ficheLogement.location}</div>
                <div className='tags'>{tagsLogement}</div>
            </div>
            <div className='info-secondary'>
                <div className='owner'>
                    {/* <div>{ficheLogement.host.name}</div> */}
                    <div className='owner_name'>
                        <span>{name[0]}</span>
                        <span>{name[1]}</span>
                    </div>
                    <div><img className='owner_picture' src={ficheLogement.host.picture} alt="photo de profil du propriétaire" /></div>
                </div>
                <div className='rating'>
                    <Rating />
                </div>
            </div>
        </div>
        <div className='info-tertiary'>
            <div>
                <Collapse baseline="Description" content={ficheLogement.description}/>
            </div>
            <div>
                <Collapse baseline="Équipements" content={equipements}/>
            </div>
        </div>
        
        </>
    )

}

export default FicheLogement