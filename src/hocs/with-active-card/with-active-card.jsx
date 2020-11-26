import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this._handleActiveCard = this._handleActiveCard.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);

      this.hoverTimeout = null;

      this.state = {
        activeCard: -1,
      };
    }

    _handleActiveCard(id) {
      this.hoverTimeout = setTimeout(() =>
        this.setState({
          activeCard: id
        }), 1000);
    }

    _handleMouseLeave() {
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
          handleActiveCard={this._handleActiveCard}
          handleMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
