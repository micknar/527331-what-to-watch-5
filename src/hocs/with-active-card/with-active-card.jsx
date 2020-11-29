import React, {PureComponent} from "react";
import {CARD_HOVER_TIMEOUT} from "../../const/const";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this._onCardMouseOverHandler = this._onCardMouseOverHandler.bind(this);
      this._onCardMouseOutHandler = this._onCardMouseOutHandler.bind(this);

      this.state = {
        activeCard: -1,
        hoverTimeout: null,
      };
    }

    componentWillUnmount() {
      this.setState({
        hoverTimeout: null,
      });

      clearTimeout(this.state.hoverTimeout);
    }

    _onCardMouseOverHandler(id) {
      this.setState({
        hoverTimeout: setTimeout(() =>
          this.setState({
            activeCard: id,
          }), CARD_HOVER_TIMEOUT),
      });
    }

    _onCardMouseOutHandler() {
      this.setState({
        activeCard: -1,
        hoverTimeout: null,
      });

      clearTimeout(this.state.hoverTimeout);
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
