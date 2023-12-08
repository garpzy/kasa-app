import {useParams } from 'react-router-dom';
import logements from '../data/data.json'
import Carrousel from './Carrousel';


import './ficheLogement.scss';

function FicheLogement(){
    let { logementId } = useParams();
    let ficheLogement = logements.find((logement) => logement.id === logementId);
   
    return(
        <>
            <Carrousel />
        </>
    )
}

export default FicheLogement