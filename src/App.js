import React, {useState} from "react";
import "./style.css";
import Header from './components/Header';
import Form from './components/Form';
import Poster from './components/Poster';


export default function App() {

  const [posters, setPosters] = useState([])

  const fetchPoster = async () => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/5?api_key=3b1bc545c2aff630803e3dfd3ac89e2e'
  
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setPosters(data)
  
    } catch (e) {
      console.log(e)
    }
  }

 console.log(posters.id)
  
  const imgLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + posters.poster_path
    console.log(imgLink)

  // const list = posters.map(poster => {
  //   console.log('')
  //   return <li 
  //   key={poster.id}>
  //     {poster.overview}
  //   </li>

  // })
 
  return (
    <div>
      <Header />
        <button onClick={()=> fetchPoster()}>Call the stuff!</button>
        <img src={imgLink} />
      <Form /*fetchPoster={fetchPoster()}*/ />
      <Poster />
    </div>
  );
}

// http://image.tmdb.org/t/p/w154/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
// http://image.tmdb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg