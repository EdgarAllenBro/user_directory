import React, {useState} from 'react'
import './App.css';
import data from './data'

function FavList(props) {
  const fav = props.fav;
  const favList = fav.map((e,i)=> <li key={i}>{e}</li>)
  return <ol>{favList}</ol>
}



function App() {
  const info = data
  const [id,setId] = useState(1)
  const user = info[id]
  const [name,setName] = useState(`${user.name.first} ${user.name.last}`)
  const [from,setFrom] = useState(`${user.city}, ${user.country}`)
  const [employer,setEmployer] = useState(`${user.employer}`)
  const [job, setJob] = useState(`${user.title}`)
  const [favs,setFavs] = useState([user.favoriteMovies])


  return(
<div>

  <div className='userInfo'>
    <h1>{name}</h1>
    <h3>From:{from}</h3>
    <h3>Job Title:{job}</h3>
    <h3>Employer:{employer}</h3>
    <h2>Favorite Movies</h2>
    <FavList fav={favs} />
    
  </div>
</div>
  )
}

export default App;
