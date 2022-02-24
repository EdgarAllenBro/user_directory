import React, {useState, useEffect} from 'react'
import './App.css';
import data from './data'

function FavList(props) {
  const fav = props.fav;
  const favList = fav.map((e,i)=> <li key={i}>{e}</li>)
  return <ol>{favList}</ol>
}

function App() {
  const [id,setId] = useState(0)
  const user = data[id]

  return(
<div className='body'>
<div className='header'>
  <h3>Home</h3>
</div>
  <div className='userInfo'>
  <h3>{id+1}/{data.length}</h3>
    <h1>{user.name.first} {user.name.last}</h1>
    <div>
    <h3>From:{user.city},{user.country}</h3>
    <h3>Job Title:{user.title}</h3>
    <h3>Employer:{user.employer}</h3>
    </div>
    <h2>Favorite Movies</h2>
    <div className='favlist'>
    <FavList fav={user.favoriteMovies} />
    </div>
    </div>

    <div className='nav'>
      <button className='moveBtn' onClick={()=> setId(id-1)}>  Previous </button>
      <button>Edit</button>
      <button onClick={()=>data.splice(id,1)}>Delete</button>
      <button>New</button>
      <button className='moveBtn' onClick={()=> setId(id+1)}>  Next  </button>
    </div>
  
</div>
  )
}

export default App;
