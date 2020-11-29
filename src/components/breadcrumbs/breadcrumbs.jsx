import React from "react";
import filmProp from "../../const/film-prop";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const/const";

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
  film: filmProp.isRequired,
};

export default Breadcrumbs;
