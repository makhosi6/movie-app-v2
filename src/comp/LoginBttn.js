import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const responseGoogle = (response) => {
  console.log(response.wt.fV);
  //ALL ITEMS MUST BE STRINGS....
  localStorage.setItem('firstname',response.wt.fV)
  localStorage.setItem('fullname',response.wt.Ad)
  localStorage.setItem('email',response.wt.cu)
  localStorage.setItem('imageUrl',response.wt.SJ)
};
export default class LoginBttn extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={
              `${CLIENT_ID}`
          }
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
        {/* <FontAwesome name="google" /> */}
          <span> Login with Google</span>
        </GoogleLogin>
        
      </div>
    );
  }
}
