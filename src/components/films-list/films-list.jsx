import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: ``};

    this._handleActiveCard = this._handleActiveCard.bind(this);
  }

  _handleActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              posterImage={film.posterImage}
              onFilmCardHover={this._handleActiveCard}
              onFilmCardClick={onFilmCardClick}
            />
          );
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmsList;
