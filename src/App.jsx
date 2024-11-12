import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
function App() {

  const [watchlist, setWatchlist] = useState([])

  let handleAddtoWatchlist = (movieob) => {
      let newWatchlist = [...watchlist, movieob]
      localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
      setWatchlist(newWatchlist)
      console.log(newWatchlist)
  };

  let handleRemoveFromWatchlist = (movieob)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
        return movie.id != movieob.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist)
    console.log(filteredWatchlist)
  }

  useEffect(()=>{
      let moviesFromLocalStorage = localStorage.getItem('moviesApp')
      if(!moviesFromLocalStorage){
          return
      }
      setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={
              <>
                <Banner/>
                <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
          }/>
          <Route path='/watchlist' element={
                <WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
          }/>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
