
import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard';
const app_url = `https://omdbapi.com?apikey=${process.env.REACT_APP_MY_API_KEY}`;

 


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${app_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=> {
    searchMovies('Spiderman')
  },[])
  return (
    <div className="app">
      <h1>FilmLand</h1>
      <div className='search'>
        <input 
         placeholder='Search Movie...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         
         />
         <img src={SearchIcon} alt='search icon' 
         onClick={() => searchMovies(searchTerm)}
         />
      </div>
      {
        movies?.length > 0 
        ?(

          <div className='container'> 
          {movies.map((movie) => (
            <Moviecard movie = {movie} />
          ))}
         
          
          </div>
            
        ): (
          <div className='empty'>
            <h2>No movies found</h2>
            </div>

        )
      }
    </div>
  );
}

export default App;


