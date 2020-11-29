import {extend, getRatingMark, getRuntime, getDate} from "../utils";

export const adaptFilmToClient = (film) => {
  const result = extend(
      film,
      {
        id: film.id,
        name: film.name,
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        description: film.description,
        rating: film.rating,
        scoresCount: film.scores_count,
        ratingMark: getRatingMark(film.rating),
        director: film.director,
        starring: film.starring,
        runTime: getRuntime(film.run_time),
        genre: film.genre,
        released: film.released,
        isFavorite: film.is_favorite,
      });

  delete result.poster_image;
  delete result.preview_image;
  delete result.background_image;
  delete result.background_color;
  delete result.scores_count;
  delete result.video_link;
  delete result.preview_video_link;
  delete result.run_time;
  delete result.is_favorite;

  return result;
};

export const adaptCommentToClient = (comment) => {
  const result = extend(
      comment,
      {
        id: comment.id,
        user: {
          id: comment.user.id,
          name: comment.user.name,
        },
        rating: comment.rating,
        comment: comment.comment,
        date: getDate(comment.date),
      });

  return result;
};
