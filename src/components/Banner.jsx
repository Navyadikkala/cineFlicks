import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end ' style={{backgroundImage : `url(https://wallpaperbat.com/img/359235--2014-movie-poster-wallpaper-oc.jpg)`}}>
        <div className='text-6xl text-white text-center italic h-full w-full bg-gray-900/70 p-4 py-48 '>
          <div className='text-pink-300 hover:scale-110 duration-300 hover:cursor-pointer hover:text-blue-200'>CineFlicks</div>
        </div>
    </div>
  )
}

export default Banner