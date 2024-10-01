import { useDragonBall } from "../hooks/useDragonBall";

const ShowCharacter = () => {

    const { characterById } = useDragonBall();
    const { image, name, description } = characterById;
    return (
        <div className="w-2/5 px-3 rounded-md shadow-lg">

            <div className="flex justify-center p-4">
                <img src={image} className="h-60" alt="" />
            </div>
            <div className="p-4">
                <p className="font-bold uppercase text-md text-amber-600">Nombre: <span className="text-gray-500">{name}</span></p>
                <p className="font-bold uppercase text-md text-amber-600">Descripcion: <span className="text-gray-500">{description}</span></p>
            </div>

        </div>
    )
}

export default ShowCharacter