import React, {PureComponent} from 'react';

const withAuthData = (Component) => {
  class WithAuthData extends PureComponent {
    constructor(props) {
      super(props);

      this.handleTextChange = this.handleTextChange.bind(this);

      this.state = {
        email: ``,
        password: ``,
      };
    }

    handleTextChange(evt) {
      if (evt.target.type === `email`) {
        this.setState({
          email: evt.target.value,
        });
      } else if (evt.target.type === `password`) {
        this.setState({
          password: evt.target.value,
        });
      }
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          handleTextChange={this.handleTextChange}
        />
      );
    }
  }

  return WithAuthData;
};

export default withAuthData;
