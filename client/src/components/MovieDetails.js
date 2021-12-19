import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Header from '../view/Header';

const MovieDetails = (props) => {
    const {id} = props;

    const [movie, setMovie] = useState({});
    
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/recipes/${id}`)
    //         .then((res) => {
    //             setMovie(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    var options = {
        method: 'GET',
        url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
        params: {type: 'get-movies-images-by-imdb', imdb: 'tt1375666'},
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
            <div className='wrapper'>
                
            </div>
        </div>
    )
}

export default MovieDetails;