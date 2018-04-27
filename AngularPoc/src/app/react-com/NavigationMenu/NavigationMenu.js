import React    from "react";
import template from "./NavigationMenu.jsx";

class NavigationMenu extends React.Component {
  
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

NavigationMenu.defaultProps = {
  icons: [],
  title: '',
  onMenuStateChange: () => { },
  userName: 'sti\\cbell',
  logoutEvent: () => { },
  ipAddress: '0.0.0.0',
  hostName: 'sti.cbell-10'
};
export default NavigationMenu;
