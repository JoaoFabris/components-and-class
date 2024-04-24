import { Component } from "react";
import logo from '../assets/logo.png'

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
      </header>
    );
  }
}
