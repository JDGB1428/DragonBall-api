import { useEffect, useState } from "react"
import CardCharacter from "../Components/CardCharacter";
import Paginate from "../Components/Paginate";
import { useParams } from "react-router-dom";

const Character = () => {

    const [character, setCharacter] = useState([]);
    const [links, setLinks] = useState({});
    const {id} = useParams()

    const InitialUrl = 'https://dragonball-api.com/api/characters';

    useEffect(() => {
        GetAllCharacter(InitialUrl);
    }, [])

    async function GetAllCharacter(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCharacter(data.items);
            setLinks(data.links);
        } catch (error) {
            console.log(error)
        }
    }

    function onPrevious(){
        GetAllCharacter(links.previous);
    }

    function onNext(){
        GetAllCharacter(links.next);
    }
    function onFirst(){
        GetAllCharacter(links.first)
    }
    return (
        <>
            <div className="flex flex-wrap gap-5 mt-5">
                {
                    character.map((character) => (
                        <CardCharacter character={character} key={character.id} />
                    ))
                }
            </div>
            <div className="mt-10">
                <Paginate onFirst={onFirst} next={links.next} previous={links.previous} onNext={onNext} onPrevious={onPrevious} />
            </div>
        </>
    )
}

export default Character