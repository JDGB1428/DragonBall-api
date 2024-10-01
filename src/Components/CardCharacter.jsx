import { Link } from "react-router-dom"

const CardCharacter = ({character}) => {
    const {id, name, ki, maxKi, race, gender, affiliation, image} = character
    return (
        <div className="px-3 rounded-md shadow-lg">
            <div className="flex justify-center">
                <img src={image} className="w-64 h-auto p-2" alt=""/>
            </div>
            <div className="p-5 space-y-3">
                <Link to={`/character/${id}`} className="font-bold uppercase text-md text-amber-600">Nombre: <span className="text-gray-500">{name}</span></Link>
                <p className="font-bold uppercase text-md text-amber-600">Genero: <span className="text-gray-500">{gender}</span> </p>
                <p className="font-bold uppercase text-md text-amber-600">Raza: <span className="text-gray-500">{race}</span></p>
                <p className="font-bold uppercase text-md text-amber-600">Ki base: <span className="text-gray-500">{ki}</span></p>
                <p className="font-bold uppercase text-md text-amber-600">Maximo ki: <span className="text-gray-500">{maxKi}</span></p>
                <p className="font-bold uppercase text-md text-amber-600">Afiliacion: <span className="text-gray-500">{affiliation}</span></p>
            </div>
        </div>
    )
}

export default CardCharacter