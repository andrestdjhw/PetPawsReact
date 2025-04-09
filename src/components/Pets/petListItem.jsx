export const PetListItem = ({ name, cod, img, type, width, height, breads, onShowDetail }) => {
    return (
        <div onClick={onShowDetail}>
            <img src={img} alt={name} width={width} height={height} />
            <div>
                <div>
                    <strong>{name} </strong>
                    <p><strong>({type} )</strong></p>
                    <p>ID: {cod}</p>
                    <button onClick={() => { onShowDetail(cod) }}  >¡Adopta!</button>
                </div>
            </div>
        </div>
    );
};