import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from '../components/AllMovies';
import Header from '../view/Header';
import { Link } from '@reach/router';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/recipes')
    //         .then(res => {
    //             setMovies(res.data);
    //             setLoaded(true);
    //             console.log(res.data);
    //         })
    // }, []);

    var options = {
        method: 'GET',
        url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
        params: {type: 'get-popular-movies', page: '1', year: '2020'},
        headers: {
          'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
          'x-rapidapi-key': '593e7aa16amshd38f4d9f5d34c8dp157b84jsn0aacdcc7100b'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    return (
        <div>
            <Header />
            <AllMovies />
            {/* <div>
                {loaded && <AllMovies movies={movies} />}
            </div> */}
        </div>
    )
}

export default Main;