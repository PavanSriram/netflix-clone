import './App.css';
import Row from './Row.js'
import requests from './requests'
import Banner from './Banner.js'
import NavBar from './NavBar'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = 'Netflix-clone'
  }, [])

  return (
    <div className="App">

      <NavBar />

      <Banner />

      <Row 
        title='Netflix Originals' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='TopRated' fetchUrl={requests.fetchTopRated}/>
      <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
