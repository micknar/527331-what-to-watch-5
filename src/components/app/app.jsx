import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main poster={props.poster}/>;
};

App.propTypes = {
  poster: PropTypes.object.isRequired,
};

export default App;
