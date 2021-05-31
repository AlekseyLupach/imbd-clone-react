function MovieDetails({ details }) {
  return (
    <div>
      <img src={details.Poster} alt="poster" />

      <h1>{details.Title} ({details.Year})</h1>

      <span>Director:</span> <span>{details.Director}</span>

      <span>Actors:</span> <span>{details.Actors}</span>

      <span>Genre:</span> <span>{details.Genre}</span>

      <span>Plot:</span> <span>{details.Plot}</span>
    </div>
  )
}

export default MovieDetails;