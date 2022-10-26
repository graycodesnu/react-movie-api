import React, {useState} from "react";
import "./style.css";
import Header from './Header';
import Form from './Form';
import Poster from './Poster';


export default function App() {

  const [posters, setPoster] = useState([])

  const fetchPoster = async () => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=3b1bc545c2aff630803e3dfd3ac89e2e'
  
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setPoster(data.results)
  
    } catch (e) {
      console.log(e)
    }
  }
  console.log(posters)
  

  const list = posters.map(poster => {
    console.log('Sanity Check!')
    return <li 
    key={poster.id}>{poster.poster_path}
    </li>

  })

  return (
    <div>
      <Header />
      <Form fetchPoster={fetchPoster()}/>
      <Poster list={list}/>
    </div>
  );
}

// http://image.tmdb.org/t/p/w154/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
// http://image.tmdb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg