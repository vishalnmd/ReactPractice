import Card from "./Card";

function CardList(){
    return (
        <>
            <div className="flex justify-center items-center sm:flex-row flex-col gap-6">
                <Card name="Endou momoru" dir="../src/assets/endou.jpg" des="The best captain and goal keeper." />
                <Card name="Monkey D luffy" dir="../src/assets/luffy.jpg" des="Future pirate king"/>
                <Card name="Itachi Uchiha" dir="../src/assets/itachi.jpeg" des="Prodigy and god of genjutsu"/>
            </div>
        </>
    );
}

export default CardList;