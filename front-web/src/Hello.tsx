import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({message}: Props){

    useEffect(() => {
        //chamada para a api para buscar os produtos
        console.log('COMPONENTE - CICLO DE VIDA - COMPONENTE INICIOU')
    }, [])

    return (
        <h1>Hello {message}!</h1>
    )
}

export default Hello;