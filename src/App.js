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
  const [id,setId] = useState(0)
  const user = info[id]

  return(
<div>

  <div className='userInfo'>
  <h3>{id+1}/{info.length}</h3>
    <h1>{user.name.first} {user.name.last}</h1>
    <div>
    <h3>From:{user.city},{user.country}</h3>
    <h3>Job Title:{user.title}</h3>
    <h3>Employer:{user.employer}</h3>
    </div>
    <h2>Favorite Movies</h2>
    <FavList fav={user.favoriteMovies} />
    <div>
    <button onClick={()=> setId(id-1)}> Previous </button>
    <button onClick={()=> setId(id+1)}> Next </button>
    </div>
  </div>
</div>
  )
}

export default App;
