import { Mascota} from "../../services/Mascotas"
import { PetListItem } from "./petListItem"; 

export const PetList = ({
    pets,
        clickHandler = (code)=>{}
}) => {
    return (
        Mascota.map((pet) => (
            <PetListItem
                key={pet.nombre}
                name={pet.nombre}
                img={pet.imagen}
                tipo={pet.tipo}
                raza={pet.raza}
                onClickHandler={clickHandler}/>
        ))
    );
};


