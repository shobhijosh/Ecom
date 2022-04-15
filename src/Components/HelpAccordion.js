import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const HelpAccordion = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="accordionItem" id='item'>
            <div className="question">
                <p>Lorem ipsum dolor sit amet.</p>
                <span onClick={() => setReadMore(!readMore)}>{readMore ? <FaArrowUp /> : <FaArrowDown />}</span>
            </div>
            {readMore &&
                <>
                    <hr />
                    <div className="answer">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut harum, vitae fugit non facere expedita numquam. Voluptates magnam exercitationem expedita!
                    </div>
                </>}
        </div>
    )
}

export default HelpAccordion