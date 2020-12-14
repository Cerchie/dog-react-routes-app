import React from 'react';
import {useParams} from 'react-router-dom';

const DogDetails = (dogs) => {
    
    const {name}= useParams();
    const currentDog = dogs.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
   
    return <> <h1>Here's {currentDog.name}. He's {currentDog.age}. His facts are  {currentDog.facts}</h1></>;
}

export default DogDetails;