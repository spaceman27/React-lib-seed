import React    from "react";
import CSSModules from 'react-css-modules';
import styles from "./VisionButtonAdd.scss";
import { Button } from '@progress/kendo-react-buttons';


class VisionButtonAdd extends React.Component {
  static defaultProps = {};
  
  constructor() {
      super();
      this.state = { };
  }

  render() {
    return (
        <Button styleName="btn-add-ams" disabled={this.props.disabled} onClick={this.props.click}> {this.props.children?this.props.children:"Add"} </Button> 
    );
  }
}

export default CSSModules(VisionButtonAdd, styles);
