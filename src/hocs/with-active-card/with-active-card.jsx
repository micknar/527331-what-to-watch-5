import React, {PureComponent} from "react";
import {CARD_HOVER_TIMEOUT} from "../../const";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this._onCardMouseOverHandler = this._onCardMouseOverHandler.bind(this);
      this._onCardMouseOutHandler = this._onCardMouseOutHandler.bind(this);

      this._hoverTimeout = null;

      this.state = {
        activeCard: -1,
      };
    }

    componentWillUnmount() {
      if (this._hoverTimeout) {
        clearTimeout(this._hoverTimeout);
      }
    }

    _onCardMouseOverHandler(id) {
      if (this._hoverTimeout) {
        clearTimeout(this.timerID);
      }

      this._hoverTimeout = setTimeout(() =>
        this.setState({
          activeCard: id
        }), CARD_HOVER_TIMEOUT);
    }

    _onCardMouseOutHandler() {
      this.setState({
        activeCard: -1,
      });

      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = null;
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
