import React, { useEffect, useState } from 'react';
import './Joke.css'

const API_URL = "http://api.icndb.com/jokes/random";

const Joke = () => {
    const [joke, setJoke] = useState('');

    const getJokes = () => {
        fetch(API_URL)
          .then(res=>res.json())
          .then(data=>setJoke(data.value.joke))
    }

     useEffect(() => {
      getJokes();
     
       
     }, [])
     

  return (
    <>
        <div className="jokeContainer">
            <button onClick={getJokes} className="jokeBtn">Get Funny Jokes</button>
            <div className="showBox">{joke}</div>
        </div>
    </>
  )
}

export {Joke}