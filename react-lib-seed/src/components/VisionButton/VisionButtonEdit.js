import React    from "react";
import CSSModules from 'react-css-modules';
import styles from "./VisionButtonEdit.scss";
import { Button } from '@progress/kendo-react-buttons';

class VisionButtonEdit extends React.Component {
  static defaultProps = {};
  
  constructor() {
      super();
      this.state = { };
  }

  render() {
    return (
        <Button styleName="btn-edit-ams" disabled={this.props.disabled} onClick={this.props.click}> {this.props.children?this.props.children:"Edit"} </Button> 
    );
  }
}

export default CSSModules(VisionButtonEdit, styles);
