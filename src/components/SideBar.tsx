import { Button } from "./Button";


export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  thisGenres: GenreResponseProps[]
  setSelectedGenreId(id: number): void
  selectedGenreId: number
}

export function SideBar({ thisGenres, setSelectedGenreId, selectedGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {thisGenres.map(thisGenres => (
          <Button
            key={String(thisGenres.id)}
            title={thisGenres.title}
            iconName={thisGenres.name}
            onClick={() => handleClickButton(thisGenres.id)}
            selected={selectedGenreId === thisGenres.id}
          />
        ))}
      </div>

    </nav>

  )
  // Complete aqui
}