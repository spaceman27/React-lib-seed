import "./NavigationMenu.scss";
import React from "react";
import SlideoutMenu from '../SlideoutMenu/SlideoutMenu';

function template() {
  return (
    <nav className="navigation-menu navbar navbar-expand-lg ams-navbar">
      <div id="overlay" className={this.state.hidden === true ? "" : "show"} onClick={this.toggleMenu}></div>
      <div className="slideout-menu">
          <SlideoutMenu icons={this.props.icons} showMenu={this.toggleMenu} hidden={this.state.hidden}></SlideoutMenu>
      </div>
      <div className="navbar-brand">
          <label className = {this.state.hidden === true ? "title" : "title slideRight"}>{this.props.title}</label>
      </div>
      <div className="menuBox nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="javascript:;" data-toggle="dropdown">
          {this.props.userName} <i className="fa fa-user-circle"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right userDropdown" aria-labelledby="user-dropdown">
              <h6 className="dropdown-header">
              <span>{this.props.loggedInLabel}</span> <b>{this.props.userName}</b></h6>
              <h6 className="dropdown-header"> {this.props.ipAddressLabel} {this.props.ipAddress}</h6>
              <h6 className="dropdown-header"> {this.props.hostNameLabel} {this.props.hostName}</h6>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={this.props.logoutEvent} tabIndex="0">{this.props.logoutLabel}</button>
        </div>
      </div>
    </nav>
  );
};

export default template;
