import React from 'react';

const DogList = (dogs) => {
    console.log(dogs.dogs)
    return (
        
            dogs.dogs.map(dog => <div> 
                <p>Name:{dog.name} </p>
                <p>Age: {dog.age} </p>
                <p>  Facts: {dog.facts}</p> </div>) 
     );
}

export default DogList;