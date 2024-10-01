
const CardPlanets = ({ planets }) => {
    const { name, description, image } = planets
    return (
        <div className="px-3 rounded-md shadow-lg">
            <div className="flex justify-center">
                <img src={image} className="w-64 h-auto p-2 " alt="" />
            </div>
            <div className="p-5 space-y-3">
                <p className="font-bold uppercase text-md text-amber-600">Nombre: <span className="text-gray-500">{name}</span></p>
                <p className="font-bold uppercase text-md text-amber-600">Descripcion: </p>
                <div className="font-bold uppercase w-96 text-md">
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPlanets