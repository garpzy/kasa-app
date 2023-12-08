import './tag.scss'

function Tag({label}){
    return(
        <>
        <div className='tag'>
            <p>{label}</p>
        </div>
        </>
    )
}

export default Tag