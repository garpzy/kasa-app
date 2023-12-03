import './collapse.scss'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse({baseline, content}){
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="collapsible" >
                <div className='collapsible_baseline' onClick={() => setToggle(!toggle)} >
                    {baseline}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </div>
                <div className={toggle ? 'collapsible_content' : 'collapsible_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )

    // for (i = 0; i < coll.length; i++) {
    // coll[i].addEventListener("click", function() {
    //     console.log("salut")
    //     this.classList.toggle("active");
    //     console.log(this)
    //     let content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //     content.style.display = "none";
    //     } else {
    //     content.style.display = "block";
    //     }
    // });
    // }
    // return (
    //     <>
    //     <button type="button" class="collapsible">{baseline}</button>
    //     <div class="content">
    //         <p>{content}</p>
    //     </div>
    //     </>
    // )
}

export default Collapse