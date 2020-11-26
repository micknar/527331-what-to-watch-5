import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this._onCardMouseOverHandler = this._onCardMouseOverHandler.bind(this);
      this._onCardMouseOutHandler = this._onCardMouseOutHandler.bind(this);

      this.hoverTimeout = null;

      this.state = {
        activeCard: -1,
      };
    }

    _onCardMouseOverHandler(id) {
      this.hoverTimeout = setTimeout(() =>
        this.setState({
          activeCard: id
        }), 1000);
    }

    _onCardMouseOutHandler() {
      clearTimeout(this._hoverTimeout);
      this.hoverTimeout = null;

      this.setState({
        activeCard: -1,
      });
    }

    render() {
      const activeCard = this.state.activeCard;

      return (
        <Component {...this.props}
          activeCard={activeCard}
          onCardMouseOver={this._onCardMouseOverHandler}
          onCardMouseOut={this._onCardMouseOutHandler}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
