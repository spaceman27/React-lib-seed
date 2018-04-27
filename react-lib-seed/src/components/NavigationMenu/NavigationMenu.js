import React    from "react";
import CSSModules from 'react-css-modules';
import template from "./NavigationMenu.jsx";
import styles from "./NavigationMenu.scss";


class NavigationMenu extends React.Component {
  static defaultProps = {
    icons: [],
    title: '',
    onMenuStateChange: () => { },
    userName: 'sti\\cbell',
    logoutEvent: () => { },
    ipAddress: '0.0.0.0',
    hostName: 'sti.cbell-10'
  };
  
  constructor() {
      super();
      this.state = {hidden: true, showDropdown: false};
  }

  render() {
    return template.call(this);
  }

  toggleMenu = () => {
      this.setState((prev) => ({hidden: !prev.hidden}));
      this.props.onMenuStateChange();
  }

  toggleDropdown = () => {
    this.setState((prev) => ({hidden: prev.hidden, showDropdown: !prev.showDropdown}));
  }
}

export default CSSModules(NavigationMenu, styles);
