import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import {useEffect} from 'react'
import axios from 'axios'

function Movies({watchlist, handleAddtoWatchlist, handleRemoveFromWatchlist}) {
  const [movies, setMovies] = useState([])
  const [pagenumber, setPagenumber] = useState(1)

  const handlePrev = ()=>{
    if(pagenumber == 1){
      setPagenumber(1)
    }
    else{
      setPagenumber(pagenumber-1)
    }  
  }
  const handleNext = ()=>{
    setPagenumber(pagenumber+1)
  }

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d27552cd2195cf438f3378a26456f650&language=en-US&page=${pagenumber}`).then(function(res){
        setMovies(res.data.results)
        // console.log(res)
      })
  }, [pagenumber])


  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
          Trending Movies
      </div>
      
      <div className='flex flex-wrap flex-row justify-around gap-8'>
          {movies.map((movieob)=>{
              return <MovieCard key={movieob.id} movieob={movieob} poster_path={movieob.poster_path} name={movieob.title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
          })}
      </div>
        
      <Pagination pagenumber={pagenumber} handleNext={handleNext} handlePrev={handlePrev}/>

    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=d27552cd2195cf438f3378a26456f650&language=en-US&page=2