export default function MoviesLst(props) {
  {
    console.log(props.MoviesLst);
  }

  return (
    <>
        {console.log("Chidl is rendering")}
      <div className="flex flex-col items-center min-h-screen w-screen gap-5 bg-gray-700">
        <ul className="flex flex-wrap justify-center gap-16 m-1">
          {props.MoviesLst.map((movie) => {
            console.log(movie);
            return (
              <li key={movie.imdbID}>
                <div
                  className="h-48 w-44 gap-1 flex flex-col  items-center
                             bg-gray-500 text-sm  shadow-2xl rounded-lg"
                >
                  <h2 className="p-1">{movie.Title}</h2>
                  <img
                    className="size-24 pt-1 rounded-lg"
                    src={movie.Poster}
                    alt="#"
                  />
                  <p>{movie.Year}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
