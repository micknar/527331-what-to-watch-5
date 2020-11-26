import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Breadcrumbs = (props) => {
  const {film} = props;
  const {id, name} = film;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={AppRoute.FILMS + id} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrumbs;
