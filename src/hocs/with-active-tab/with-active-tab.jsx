import React, {PureComponent} from "react";
import {FilmPageNav} from "../../const/const";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this._onActiveTabClickHandler = this._onActiveTabClickHandler.bind(this);

      this.state = {
        filmTab: FilmPageNav.OVERVIEW,
      };
    }

    _onActiveTabClickHandler(value) {
      this.setState({
        filmTab: value,
      });
    }

    render() {
      const activeTab = this.state.filmTab;

      return (
        <Component {...this.props}
          activeTab={activeTab}
          onActiveTabClick={this._onActiveTabClickHandler}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
