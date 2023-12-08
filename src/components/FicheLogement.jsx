import {useParams } from 'react-router-dom';
import data from '.data/data.json';
import 'ficheLogement.scss';

function FicheLogement(){
    let { logementId } = useParams();
    // let ficheLogement = data.find((logement) => logement.id === logementId);
   
    return(
        <div>
            hey
        </div>
    )
}