
import React from 'react';
import {Link} from "react-router-dom"

const ColorsList = ({colors}) => {
    console.log(colors)
    return (
            Object.keys(colors).map(color => <li key={color}><Link style={{backgroundColor: color}} to={`/colors/${color.toLowerCase()}`}> 
                Here's your {color}</Link></li>) 
     );
}

export default ColorsList;