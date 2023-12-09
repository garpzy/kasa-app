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
                            <div key={index}>{item}</div>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}

export default Collapse