import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./SelectListSearchResult.scss";
import { Button } from '@progress/kendo-react-buttons';

class SelectListSearchResult extends React.Component {
  static defaultProps = {
    Config: {},
    CurrentPage: 1,
    DataCount: 0,
    disabled: false,
    addPlaceholder: '',  
    InputDataSource: []
  };

  DataSource = [];
  DataSourcePaging = [];
  startIndex = 0;
  newValue = null;
  
  constructor() {
      super();
      this.state = { };
  }
  
  searchItem(item) {
    if (item.editmod) {
        return (<input tabindex="0" type="text" class="crud-item-edit form-control" ngModel="item.modifiedContent" />);
    }
  }

  render() {
    return (
        <div class="crud-search-result">
        { 
            this.DataSourcePaging.map( (item) => {
                return (
                    <div class="search-item">
                        <div class="input-group" click="onRowSelect($event, item)" ngClass="{'crud-item-selected': item.selected}">
                            { this.searchItem(item)}
                        </div>
                    </div>
                );
            })
        }
        </div>
    );
  }
}

export default CSSModules(SelectListSearchResult, styles);
