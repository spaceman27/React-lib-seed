
import React from "react";
import { Input } from '@progress/kendo-react-inputs';

function template() {
    let rows = [];
    let filteredIcons = this.props.icons
    if(!!this.state.searchText && this.state.searchText !== '') {
        filteredIcons = this.props.icons.filter(f => f.label.includes(this.state.searchText));
    }
        
    for (let index = 0; index < filteredIcons.length; index++) {
        rows.push(getRenderedIcon.call(this, filteredIcons[index]));
    }
    return (
        <div className="container">
            <div styleName="slideoutIcon" onClick={this.props.showMenu}>
                <div className="fas fa-th"></div>
            </div>

            <div styleName={`slideoutMenu ${this.props.hidden === true ? "hiddenMenu" : "shownMenu ams-window"} `}>
                <div className="row">
                    <div className="col " styleName="slideoutIcon closeIcon pull-right" onClick={this.props.showMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input className="searchBox" label={this.props.searchLabel} onChange={ref => this.search(ref)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col title">
                        This Application
                    </div>
                </div>
                <div className="row" styleName="insideApp">
                    {rows}
                </div>
                <hr />
            </div>
        </div>
  );
};


function getRenderedIcon(icon) {
    return (
        <div className="col-3 icon" key={icon.label} onClick={() => icon.iconClick(icon)}>
            { getImageOrIcon.call(this, icon) }            
            <div className="row iconCaption">
                {icon.label}
            </div>
        </div>
    );
}

function getImageOrIcon(icon) {
    if (icon.icon !== '') {
        return <div className="row iconImage"><img src={icon.icon} alt="Not Found"></img></div>;
    } else {
        return <div className="row iconFA"><i className={icon.fontAwesomeClass}></i></div>
    }
}

export default template;
