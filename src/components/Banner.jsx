import './banner.scss'

function Banner({banner_page, text}){
    return (
			<div className={banner_page}>
				<p>{text}</p>
			</div>
    )
}
export default Banner
