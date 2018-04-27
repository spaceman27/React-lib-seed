import React    from "react";
import template from "./SlideoutMenu.jsx";

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

export default SlideoutMenu;
