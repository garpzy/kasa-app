import {useParams } from 'react-router-dom';
import data from '.data/data.json'

function FicheLogement(){
    let { logementId } = useParams();
    let ficheLogement = data.find((logement) => logement.id === logementId);
   
    return(

    )
}