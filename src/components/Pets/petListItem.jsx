export const PetListItem = ({ name, cod, img, type, width, height, onShowDetail }) => {
    return (
        <div  onClick={onShowDetail}>
            <img src={img} alt={name} width={width} height={height} />
            <div>
                <h3>{name} ({type})</h3>
                <p>ID: {cod}</p>
                <button onClick={()=>{onShowDetail(cod)}}>¡Adopta!</button>
            </div>
        </div>
    );
};