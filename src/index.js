import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films, promoFilm} from './mocks/films.js';
// console.log(films);

ReactDOM.render(
    <App
      films={films}
      promoFilm={promoFilm}
    />,
    document.querySelector(`#root`)
);
