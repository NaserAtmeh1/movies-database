import { useContext } from "react"
import {MovieContext} from '../App'
export default function List() {

  const movies = useContext(MovieContext)
  console.log(movies)


 

  return (
    <div className="con">
      {
        movies?.slice(0,8).map(movie => (
          <div className="card" key={movie.id}>
            <img className="img" src={movie.Poster} />
            <div className="heho">
              <h2 className="head4">{movie.Title}</h2>
            </div>
            
          </div>
        ))
      }
    </div>
  )
}
