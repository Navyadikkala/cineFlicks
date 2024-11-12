import React from 'react'

function MovieCard({movieob, poster_path, name, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist}) {

  function doesContain(movieob){
      for(let i=0; i<watchlist.length; i++){
        if(watchlist[i].id == movieob.id){
          return true
        }
      }
      return false
  }
  return (
    <div className='h-[40vh] w-[175px] bg-center bg-cover rounded-lg hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
          
          {doesContain(movieob)?
              <div onClick={()=>handleRemoveFromWatchlist(movieob)} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>&#10060;</div>:
              <div onClick={()=>handleAddtoWatchlist(movieob)} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                  &#128525;
              </div>
        }
          
        <div className='text-white text-xl w-full p-2 text-center rounded-b-lg bg-gray-900/60'>
            {name}
        </div>

    </div>
  )
}

export default MovieCard