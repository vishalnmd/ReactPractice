
function Card(props){
    return (
        <>
            <div className="h-64 w-56  gap-2 flex flex-col justify-center items-center
                             bg-gray-500 text-sm active:-translate-y-5 shadow-2xl rounded-lg md:hover:-translate-y-5 ">
                <h2>{props.name}</h2>
                <img className="size-24 pt-1 rounded-full" src={props.dir} alt="#" />
                <p>{props.des}</p>
            </div>
        </>
    );
}

export default Card;