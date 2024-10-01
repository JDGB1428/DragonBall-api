import { useEffect, useState } from "react"
import CardPlanets from "../Components/CardPlanets";
import Paginate from "../Components/Paginate";
import PaginatePlanets from "../Components/PaginatePlanets";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [links, setLinks] = useState({});

    const InitialUrl = 'https://dragonball-api.com/api/planets';

    useEffect(() => {
        GetAllPlanets(InitialUrl);
    }, [])

    async function GetAllPlanets(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPlanets(data.items);
            setLinks(data.links);
        } catch (error) {
            console.log(error)
        }
    }

    

    function onPrevious(){
        GetAllPlanets(links.previous);
    }

    function onNext(){
        GetAllPlanets(links.next);
    }
    function onFirst(){
        GetAllPlanets(links.first)
    }
    return (
        <>
            <div className="flex flex-wrap gap-5 mt-5">
                {
                    planets.map((items) => (
                        <CardPlanets planets={items} key={items.id} />
                    ))
                }
            </div>
            <div className="mt-10">
            <PaginatePlanets onFirst={onFirst} next={links.next} previous={links.previous} onNext={onNext} onPrevious={onPrevious} />
            </div>
        </>

    )
}

export default Planets