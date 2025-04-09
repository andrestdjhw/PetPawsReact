export const getPetList = () => {
    const catApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=ASC';
    const dogApiUrl = 'https://api.thedogapi.com/v1/images/search?limit=15&has_breeds=1&order=ASC';
    const petNames = [
        "Pelusa", "Toby", "Luna", "Max", "Simba", "Coco", "Nina", "Rocky", "Milo", "Chispa",
        "Tommy", "Kira", "Leo", "Nala", "Pepe", "Lola", "Bobby", "Mimi", "Thor", "Sasha",
        "Zeus", "Daisy", "Roco", "Olivia", "Rita"
    ];

    return Promise.all([
        fetch(catApiUrl).then(res => res.json()),
        fetch(dogApiUrl).then(res => res.json())
    ])
    .then(([cats, dogs]) => {
        const catPets = cats.map((cat, index) => ({
        type: "cat",
        name: petNames[index],
        ...cat
    }));
    const dogPets = dogs.map((dog, index) => ({
        type: "dog",
        name: petNames[index + 10],
        ...dog
    }));

    return [...catPets, ...dogPets];
    })
    .catch(error => {
        console.error("Error al obtener imágenes:", error);
        return []; 
    });
};


export const getPetDetailById = async (id) => {
    try {
        // Intenta con la API de gatos
        const catResponse = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
        const catData = await catResponse.json();

        if (catData?.breeds?.length > 0) {
            return { ...catData, type: "cat" };
        }

        // Si no es un gato, prueba con la API de perros
        const dogResponse = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
        const dogData = await dogResponse.json();

        return { ...dogData, type: "dog" };
    } catch (error) {
        console.error("Error al obtener detalle del pet:", error);
        return null;
    }
};