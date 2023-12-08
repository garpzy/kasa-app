import Gallery from "../../components/Gallery"
import Banner from "../../components/Banner"

function Home(){
    return(
        <>
            <Banner 
                banner_page={"banner_home"}
                text={"Chez vous, ici et ailleurs"}
                />
            <Gallery />
        </>
    )
}

export default Home
