import { useParams } from "react-router"
export const Detail = ()=>{
    const { pokecod } = useParams();
    return (
        <>
            <h1>Showing Detail for: {pokecod} </h1>
        </>
    )
}