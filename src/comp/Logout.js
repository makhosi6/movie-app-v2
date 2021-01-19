import { GoogleLogout } from "react-google-login";
import React, { Component } from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const logout = () => {
  localStorage.clear()
};
export default class Logout extends Component {
  render() {
    return (
      <div>
        <GoogleLogout
          clientId={`${CLIENT_ID}`}
          buttonText={`Logout as  ${this.props.email}`}
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    );
  }
}
