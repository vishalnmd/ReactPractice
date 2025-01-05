import Card from "./Card";
import EndouImg from "../assets/endou.jpg";
import LuffyImg from "../assets/luffy.jpg";
import ItachiImg from "../assets/itachi.jpeg";

function CardList(){
    return (
        <>
            <div className="flex justify-center items-center sm:flex-row flex-col gap-6">
                <Card name="Endou momoru" dir={EndouImg} des="The best captain and goal keeper." />
                <Card name="Monkey D luffy" dir={LuffyImg} des="Future pirate king"/>
                <Card name="Itachi Uchiha" dir={ItachiImg} des="Prodigy and god of genjutsu"/>
            </div>
        </>
    );
}

export default CardList;