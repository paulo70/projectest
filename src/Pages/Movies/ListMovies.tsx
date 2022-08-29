import Card from "../../components/Card"

import { IMoviesProps } from '../../interfaces/MoviesProps'
import { useNavigate } from "react-router-dom"
import Button from '../../components/Button'


const ListMovies: React.FC<IMoviesProps> = ({
  poster_path,
  id,
  title,
  release_date,
}) => {

  const navigate = useNavigate()
  const handleDetails = (id: string) => {

    navigate({
      pathname: `/details/${id}`
    })
  }

  return (
    <>
      <Card width="250px">
        {poster_path ? (
          <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt='poster' />
        ) : "IMAGE NOT FOUND"}

        <p>Title: {title}</p>
        <p>Release: {release_date}</p>
        <Button onClick={() => handleDetails(id)} disabled={false}>ver mais</Button>
      </Card>
    </>
  )
}

export default ListMovies