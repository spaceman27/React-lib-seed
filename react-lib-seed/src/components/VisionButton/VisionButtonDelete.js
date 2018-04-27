import React    from "react";
import CSSModules from 'react-css-modules';
import styles from "./VisionButtonDelete.scss";
import { Button } from '@progress/kendo-react-buttons';

class VisionButtonDelete extends React.Component {
  static defaultProps = {};
  
  constructor() {
      super();
      this.state = {};
  }

  render() {
    return (
        <Button styleName="btn-delete-ams" disabled={this.props.disabled} onClick={this.props.click}> {this.props.children?this.props.children:"Delete"} </Button> 
    );
  }
}

export default CSSModules(VisionButtonDelete, styles);
