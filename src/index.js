import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const poster = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      title={poster.title}
      genre={poster.genre}
      releaseDate={poster.releaseDate}
    />,
    document.querySelector(`#root`)
);
