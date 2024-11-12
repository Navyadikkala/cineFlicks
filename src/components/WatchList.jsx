import React, { useEffect, useState } from 'react'
import genreids from '../Utility/genre'
function WatchList({watchlist, setWatchlist, handleRemoveFromWatchlist}) {
    const [search, setSearch] = useState('')
    const [genreList, setGenreList] = useState(["All Genres"])
    const [currGenre, setCurrGenre] = useState('All Genres')

    let handleSearch = (e) =>{
      setSearch(e.target.value)
    }
    
    let handleFilter= (genre)=>{
        setCurrGenre(genre)
    }

    let sortIncreasing = () =>{
      let sortedInc = watchlist.sort((movieA, movieB)=>{
        return movieA.vote_average - movieB.vote_average
      })
      setWatchlist([...sortedInc])
    }
    let sortDecreasing = () =>{
      let sortedDec = watchlist.sort((movieA, movieB)=>{
        return movieB.vote_average - movieA.vote_average
      })
      setWatchlist([...sortedDec])
    }

    useEffect(()=>{
        let temp = watchlist.map((movieob)=>{
          return genreids[movieob.genre_ids[0]]
        })
        temp = new Set(temp)
        setGenreList(['All Genres', ...temp])
        // console.log(temp)
    },[watchlist])

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre)=>{
              return <div onClick={()=>handleFilter(genre)} className={currGenre==genre? 'flex justify-center items-center bg-pink-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold m-4 hover:scale-110 duration-300 hover:cursor-pointer ' : 'flex justify-center items-center bg-gray-400/50 h-[3rem] w-[9rem] rounded-xl text-white font-bold m-4 hover:scale-110 duration-300 hover:cursor-pointerr'}>
                {genre}
              </div>

        })}
          
      
      </div>

      <div className='flex justify-center my-4'>
          <input onChange={handleSearch} type="text" placeholder='Search for movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 hover:scale-110 duration-300 hover:cursor-pointerr' />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8 '>
        <table className='w-full text-gray-800 text-center'>
          <thead className='border-b-2'>
              <tr>
                <th>Name</th>
                <th className='flex justify-center'>
                    <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                    <div className='p-2'>Ratings</div>
                    <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
                </th>
                <th>Popularity</th>
                <th>Genre</th>
              </tr>
          </thead>
          <tbody>
              {watchlist.filter((movieob)=>{
                  if(currGenre=='All Genres'){
                      return true
                  }
                  else{
                      return genreids[movieob.genre_ids[0]] == currGenre;
                  }
              }).filter((movieob)=>{
                  return movieob.title.toLowerCase().includes(search.toLowerCase())
              }).map((movieob)=>{
                return <tr key={movieob.id} className='border-b-2'>
                         <td className='flex items-center px-6 py-4'>
                            <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieob.poster_path}`}  alt="" />
                            <div className='mx-10'>{movieob.title}</div>                  
                          </td>
                          <td>{movieob.vote_average}</td>
                          <td>{movieob.popularity}</td>
                          <td>{genreids[movieob.genre_ids[0]]}</td>
                          <td onClick={()=>handleRemoveFromWatchlist(movieob)} className='text-red-800 font-bold hover:scale-110 duration-300 hover:cursor-pointerr'>Delete</td>
              </tr>
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList