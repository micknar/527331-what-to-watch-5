import React, {PureComponent} from "react";
import {FilmPageNav} from "../../const";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this._handleActiveTab = this._handleActiveTab.bind(this);

      this.state = {
        filmTab: FilmPageNav.OVERVIEW,
      };
    }

    _handleActiveTab(value) {
      this.setState({
        filmTab: value,
      });
    }

    render() {
      const activeTab = this.state.filmTab;

      return (
        <Component {...this.props}
          activeTab={activeTab}
          handleActiveTab={this._handleActiveTab}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
