import React from 'react'

const CAT_IMAGE_URL = "https://cataas.com/cat";

function Image({ tag }) {
    return (
        <div>
            <img src={`${CAT_IMAGE_URL}/${tag}`} alt=""/>
        </div>
    )
}

export default Image
