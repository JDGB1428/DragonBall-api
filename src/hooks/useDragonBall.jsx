import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const useDragonBall = () => {

    const [character, setCharacter] = useState([]);
    const [characterById, setCharacterById] = useState({});
    const [planets, setPlanets] = useState([]);
    const [links, setLinks] = useState({});
    const [linksPlanets, setLinksPlanets] = useState({});

    const { id } = useParams(); 

    const InitialUrl = 'https://dragonball-api.com/api/characters';
    const InitialUrls = 'https://dragonball-api.com/api/planets';

    useEffect(() => {
        GetAllCharacterAndPlanets(InitialUrl, InitialUrls);
    }, [])

    useEffect(() => {
        GetCharacterById(id);
    }, [id])

    async function GetAllCharacterAndPlanets(url, url2) {
        try {
            const [response, response2] = await Promise.all([fetch(url),fetch(url2)]);
            const [data, data2] = await Promise.all([response.json(), response2.json()]);
            setCharacter(data.items);
            setPlanets(data2.items);
            setLinks(data.links)
            setLinksPlanets(data2.links);
        } catch (error) {
            console.log(error)
        }
    }

    async function GetCharacterById(id) {
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
            const data = await response.json();
            setCharacterById(data);
        } catch (error) {
            console.log(error)
        }
    }

    function onPrevious(){
        GetAllCharacterAndPlanets(links.previous, linksPlanets.previous);
    }

    function onNext(){
        GetAllCharacterAndPlanets(links.next, linksPlanets.first);
    }
    function onFirst(){
        GetAllCharacterAndPlanets(links.first, linksPlanets.first);
    }

    return{
        character,
        characterById,
        planets,
        links,
        linksPlanets,
        onPrevious,
        onNext,
        onFirst
    }
}