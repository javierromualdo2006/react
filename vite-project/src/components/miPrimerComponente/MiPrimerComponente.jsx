import { Estado } from "../Estado/Estado";

export function MiPrimerComponente({ name, lastName}){
    return(
        <>
        {name} {lastName} :v 
        <div>
            <img src="./imgs/VII.jpeg" alt="" />
        </div>
        <div>   
            <img src="./imgs/maiden.jpeg" alt="" />
        </div>   
        <div>
            <img src="./imgs/Rock 'n' Roll.jpeg" alt="" />
        </div>
        <Estado/>
        </>
    )
}