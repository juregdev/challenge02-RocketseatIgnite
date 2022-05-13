import { MovieCard } from "./MovieCard"
import { GenreResponseProps } from "./SideBar";


export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


interface ContentProps {
  genre: GenreResponseProps,
  thisMovies: MovieProps[];

}

export function Content({ genre, thisMovies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {thisMovies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}