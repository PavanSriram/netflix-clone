import { useState, useEffect } from 'react'
import axios from './axios.js'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
// const movieTrailer = require('movie-trailer')


const baseURL = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLarge }) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)

            setMovies(request.data.results)            

            return request
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        // console.log('clicked')

        if(trailerUrl) {
            setTrailerUrl('');
        }
        else{
            // console.log(movie?.name)
            movieTrailer(movie?.title || movie?.original_nam || movie?.name || '')
            .then((url) => {
                // console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <div className='row'>   
            <h2 id='title'>{title}</h2>

            {/* row_poster as movie_row */}
            <div className= 'movie_rows'>
                {movies.map((movie) => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`movie_row ${isLarge && 'movie_row_large'}`}
                    src={`${baseURL}${ isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title}></img>
                ))}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
