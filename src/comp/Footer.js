import React, { Component } from 'react';
import logo from "./primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"


class Footer extends Component {
    
    render() {
        return (
            <footer style ={str}  >
            <div style={{float: "left"}} > <h4>Powered By</h4> 
            <img style={{width: "60px", height: "60px"}} src={logo} alt="" /> </div>
          <p className="p" > Cookies  <br/>   <a href="#link">Privacy Policy</a> <br/>  (000)000 0000 <br/> feedback@mail.com </p>          
            <ul className="ul" >
                <li> <i className="ii icon-social-github" ></i> </li>
                <li> <i className="ii icon-social-twitter" ></i> </li>
                <li> <i className="ii icon-social-facebook" ></i> </li>
                <li> <i className="ii icon-social-instagram" ></i> </li>
             
            </ul>

            </footer>
        );
    }
}
const str = {
    backgroundColor: "#0f0f0f",
    padding: "40px",
    color: "white"
}
export default Footer;