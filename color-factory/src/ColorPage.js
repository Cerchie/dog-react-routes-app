import React from 'react';
import {useParams} from 'react-router-dom';

const ColorPage = () => {
    
    const {color}= useParams();
    console.log(color)

    return <> <h1 style={{backgroundColor: color}}>Here's {color}.</h1></>;
}

export default ColorPage;