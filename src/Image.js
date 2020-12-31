import React, { useEffect } from 'react'
import "./Image.css"

const CAT_IMAGE_URL = "https://cataas.com/cat";

function Image({ tag }) {

    const getImage = (() => {
        return <img
            src={`${CAT_IMAGE_URL}${tag ? "/" + tag : ""}`}
            alt={ `No cats like ${tag}` }
        />  
    });
    
    return (
        <div className="container">
            {getImage()}
        </div>
    )
}

export default Image
