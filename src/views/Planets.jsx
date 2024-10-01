import CardPlanets from "../Components/CardPlanets";
import PaginatePlanets from "../Components/PaginatePlanets";
import { useDragonBall } from "../hooks/useDragonBall";

const Planets = () => {
    const{planets, linksPlanets, onFirst, onNext, onPrevious} = useDragonBall();
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
            <PaginatePlanets onFirst={onFirst} next={linksPlanets.next} previous={linksPlanets.previous} onNext={onNext} onPrevious={onPrevious} />
            </div>
        </>

    )
}

export default Planets