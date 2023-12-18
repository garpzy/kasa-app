import './carrousel.scss';
import logements from "../data/data.json"
import {useParams} from 'react-router-dom';
import { useState } from 'react'
import leftArrow from "../assets/chevron_carousel_left.png";
import rightArrow from "../assets/chevron_carousel_right.png";

function Carrousel(){

    // Récupérer le bon id pour générer une page par logement
    let logementId = useParams('id').id;
    let ficheLogement = logements.find(logement => logement.id === logementId);

    const [currentIndex, setCurrentIndex] = useState(0)
    let imagesSliderArray = ficheLogement.pictures

    //autre technique : c'est pas l'index qui change c'est toute l'image 
    // au début c'est la première image du tableau
    let imageDisplayed = imagesSliderArray[0];  
    function nextImage(){
        for (let index = 0; index < imagesSliderArray.length; index++) {
            imageDisplayed = imagesSliderArray[index]
        } 
    }

    function nextSlide () {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imagesSliderArray.length - 1)
            setCurrentIndex(0)
    }

    function prevSlide () {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imagesSliderArray.length - 1)
    }

    return(
        <>
        <div className='slider'>
            <img src={rightArrow} alt="flèche droite" className="right-Arrow" onClick={nextSlide}/>
            <img src={leftArrow} alt="flèche gauche" className="left-Arrow" onClick={prevSlide}/>
            <img src={imagesSliderArray[currentIndex]} alt="image" className='imgDisplayed'/>
            {/* <img src={imageDisplayed} alt="image" /> */}
        </div>
        </>
    )
}

export default Carrousel