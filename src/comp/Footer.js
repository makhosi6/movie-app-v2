import React, {
    Component
} from 'react';
import logo from "../img/primary-white-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"


class Footer extends Component {
    render() {
        return (
            <footer style={obj}>
                <div
                    style={{
                        float: "left",
                    }}
                >
                    <h4> Powered By </h4>
                    <a href="https://api.com">
                        <img
                            style={{
                                width: "60px",
                                height: "60px",
                            }}
                            src={logo}
                            alt=""
                        />
                    </a>
                </div>
                <p className="p">
                    {" "}
              Cookies <br /> <a href="#link"> Privacy Policy </a> <br /> +(000)
              000 0000 <br /> feedback @mail.com
                </p>
                <ul className="ul">
                    <li>
                        <a href="https://github.com/username">
                            <i className="ii icon-social-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/username">
                            <i className="ii icon-social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com/username">
                            <i className="ii icon-social-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/username">
                            <i className="ii icon-social-instagram"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}
const obj = {
    backgroundColor: "#0f0f0f",
    padding: "40px",
    color: "white"
}
export default Footer;