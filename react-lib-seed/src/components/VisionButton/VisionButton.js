import React    from "react";
import CSSModules from 'react-css-modules';
import styles from "./VisionButton.scss";
import { Button } from '@progress/kendo-react-buttons';


class VisionButton extends React.Component {
  static defaultProps = {};
  
  constructor() {
      super();
      this.state = { };
  }
  
  render() {
    return (
        <Button styleName="btn-ams" disabled={this.props.disabled} onClick={this.props.click}> {this.props.children?this.props.children:"Button"} </Button> 
    );
  }
}

export default CSSModules(VisionButton, styles);
