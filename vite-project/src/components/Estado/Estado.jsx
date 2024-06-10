import { useEffect, useState } from "react";

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
};

/*
useEffect(()=>(

),[])
*/

// el useEffect se va a ejecutar la cantidad de beces que las dependencias se actualicen
// si no le pasan dependencias se ejecutara solo al principio de la app
// en el primer render
// si no se le pasa el array de dependencias siempre se va a ejecutar

useEffect(()=>(
    console.log("El contador se ha actualizado")
),[contador])

const arratPersonajes = [

    {
        
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Earth",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              // ...
            ],
            "url": "https://rickandmortyapi.com/api/character/2",
            "created": "2017-11-04T18:50:21.651Z"
          } 
        

    
]

return (
    <>
      <button onClick={handleClick}>aumentar</button>
      <p>{contador}</p>
    </>
    )
};