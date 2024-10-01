import CardCharacter from "../Components/CardCharacter";
import Paginate from "../Components/Paginate";
import { useDragonBall } from "../hooks/useDragonBall";

const Character = () => {

    const{  character,
            links,
            onPrevious,
            onNext,
            onFirst} = useDragonBall();
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