import React    from "react";
import template from "./SlideoutMenu.jsx";
import CSSModules from 'react-css-modules';
import styles from  "./SlideoutMenu.scss";

class SlideoutMenu extends React.Component {
  state = { 
      hidden: true,
      searchText: null
    };
  static defaultProps = {
    icons: [],
    searchLabel: 'Search...'
  };
  
  render() {
    return template.call(this);
  }

  search = (ref) => {
      this.setState((prev) => ({ hidden: prev.hidden, searchText: ref.target.value}))
  }
}

export default CSSModules(SlideoutMenu, styles, { allowMultiple: true });
