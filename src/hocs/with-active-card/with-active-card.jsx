import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.handleActiveCard = this.handleActiveCard.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);

      this.hoverTimeout = null;

      this.state = {
        activeCard: -1,
      };
    }

    handleActiveCard(id) {
      this.hoverTimeout = setTimeout(() =>
        this.setState({
          activeCard: id
        }), 1000);
    }

    handleMouseLeave() {
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
          handleActiveCard={this.handleActiveCard}
          handleMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
