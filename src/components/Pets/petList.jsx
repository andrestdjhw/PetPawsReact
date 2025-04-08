import { getPetList } from "../../services/petServiceApi";
import { PetListItem } from "./petListItem"; 

export const PetList = ({ pets, onShowDetail }) => {
    return (
        <section className="petHolder">
            {pets.map((pet) => (
                <PetListItem
                    key={pet.id}
                    name={pet.name}
                    cod={pet.id}
                    img={pet.url}
                    type={pet.type}
                    width={pet.width}
                    height={pet.height}
                    onShowDetail={() => onShowDetail(pet)}
                />
            ))}
        </section>
    );
};