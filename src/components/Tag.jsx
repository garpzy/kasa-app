import './tag.scss'

function Tag({nom}){
    return(
        <>
        <div className='tag'>
            <p>{nom}</p>
        </div>
        </>
    )
}

export default Tag