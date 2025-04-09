import { useParams } from "react-router"
export const Mascota = ()=>{
    const { id } = useParams();
    return (
        <>
            <h1>Showing Detail for: {id} </h1>
        </>
    )
}