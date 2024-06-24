import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts(){}
const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((reponse) => reponse.json())
        .then((reponseData) => setData(responseData))
    },[]);

    return
         {!data ? (
           <> loading... </> 
         ) : (
           <>
           <h2>
            objeto tittle: {data.tittle},
            id: {data.id}
           </h2>
           <p>body: {data.body}</p>
           </>
    )
}