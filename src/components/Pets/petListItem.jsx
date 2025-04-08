export const PetListItem = ({ name, cod, img, type, width, height, onShowDetail }) => {
    return (
        <section>
            <img src={img} alt={name} width={width} height={height} />
            <div onClick={onShowDetail}>

                <div>
                <strong>{name} </strong>
                <p><strong>({type} )</strong></p>
                    <p hidden>ID: {cod}</p>
                    <button onClick={() => { onShowDetail(cod) }}>¡Adopta!</button>
                </div>
            </div>
        </section>
    );
};