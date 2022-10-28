import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import List from "./Components/List";
export const MovieContext = createContext()
function App() {

  const[movies,setMovies] = useState([])
  const inputRef = useRef(null)
  const getMovies = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.get(`http://www.omdbapi.com/?s=${inputRef.current.value}&apikey=fc503884`)
    console.log(inputRef.current.value)
          setMovies(response.data.Search)
    
    }
   catch(err){
    console.log(err)
   }
  }

  useEffect(() => {

    getMovies()
   
  },[])



  return (
    <div className="App">
      <h1 style={{color : "green",fontSize:"3rem"}}>Search for a movie</h1>
      <form onSubmit={getMovies}>
        <input className="inp" ref={inputRef}/>
        <button className="btn" type="submit">Search</button>
        {movies?.length === undefined &&  <h2 className="head">No Results Found</h2> }
       
      </form>
      
       <MovieContext.Provider value={movies}>
        <List />      
    </MovieContext.Provider>
    </div>
   
  );
}

export default App;
