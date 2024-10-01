import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ShowCharacter = () => {
    const { id } = useParams();

    const[character, setCharacter] = useState({});

    const{image, name, description} = character

    useEffect(() => {
        GetCharacterById(id);
    }, [id])

    async function GetCharacterById(id) {
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="w-2/5 px-3 rounded-md shadow-lg">
            <div>
                <div className="flex justify-center p-4">
                    <img src={image} className="h-60" alt="" />
                </div>
                <div className="p-4">
                    <p className="font-bold uppercase text-md text-amber-600">Nombre: <span className="text-gray-500">{name}</span></p>
                    <p className="font-bold uppercase text-md text-amber-600">Descripcion: <span className="text-gray-500">{description}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ShowCharacter