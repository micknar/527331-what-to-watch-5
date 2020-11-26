import React, {PureComponent} from 'react';

const withAuthData = (Component) => {
  class WithAuthData extends PureComponent {
    constructor(props) {
      super(props);

      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);

      this.state = {
        email: ``,
        password: ``,
        isValidEmail: true,
        isValidPassword: true,
      };
    }

    _handleTextChange(evt) {
      if (evt.target.type === `email`) {
        this.setState({
          email: evt.target.value,
          isValidEmail: evt.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false,
          isValidPassword: this.state.password === `` ? false : true,
        });
      } else if (evt.target.type === `password`) {
        this.setState({
          password: evt.target.value,
          isValidPassword: evt.target.value === `` ? false : true,
        });
      }
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      const {email, password, isValidEmail, isValidPassword} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          isValidEmail={isValidEmail}
          isValidPassword={isValidPassword}
          handleTextChange={this._handleTextChange}
          handleFormSubmit={this._handleFormSubmit}
        />
      );
    }
  }

  return WithAuthData;
};

export default withAuthData;
