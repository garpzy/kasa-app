import './gallery.scss'
import logements from '../data/data.json'
import Card from './Card'


function Gallery (){
    return(
        <div className='gallery'>
            {logements.map((logement)=>{
                return(
                    <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
                )
            })}
        </div>
    )
}

export default Gallery