import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./VisionSelectList.scss";
import SelectListSearchResult from './SelectListSearchResult/SelectListSearchResult';

class VisionSelectList extends React.Component {
  static defaultProps = {};
  
  constructor() {
      super();
      this.state = { };
  }
  
  render() {
    return (
            <div styleName="crud-grid-basic">
                <div className="mb-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-font" aria-hidden="true"></i></span>
                        </div>
                        <input type="text" styleName="crud-item-search" className="k-textbox form-control" aria-label="Search Term" placeholder="" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fa fa-search fa-1x" aria-hidden="true"></i></span>
                        </div>
                    </div>             
                </div>                
                <SelectListSearchResult></SelectListSearchResult>
            </div>
    );
  }
}

export default CSSModules(VisionSelectList, styles, { allowMultiple: true });
