import React from 'react';
import ReactDOM from 'react-dom';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import { VisionButton, VisionButtonAdd, VisionButtonDelete, VisionButtonEdit } from './components/VisionButton/index';

/**
 * 
 * 
 * @export
 * @class SharedComponentLibrary
 * 
 * @typedef {Object} SharedComponentLibrary~currentConfig
 */
export default class SharedComponentLibrary {

    createComponent(ctr, config) {
        this.currentConfig = config;

        return {
            render: (props) => {
                if(!props) {
                    props = this.currentConfig.props;
                }
                ReactDOM.render(React.createElement(ctr, props), document.querySelector(this.currentConfig.selector));
            }
        }
    }

    /**
     * 
     * 
     * @memberof SharedComponentLibrary
     * @typedef { function } NavigationMenu~new
     * @param { object } config
     * @param { string } config.selector - The query selector string for the ID of the DOM object to replace with this render.
     * @param { object } config.props - The properties to pass into the component
     * @param { array } config.props.icons - An array of icons.
     */
    NavigationMenu = {
        new: (config) => 
        {
            return this.createComponent(NavigationMenu, config);
        }
    }

    /**
     * @memberof SharedComponentLibrary
     * @typedef { function } VisionButton~new
     * @param { object } config
     * @param { string } config.selector - The query selector string for the ID of the DOM object to replace with this render.
     * @param { object } config.props - The properties to pass into the component
     */
    VisionButton = {
        new: (config) => 
        {
            return this.createComponent(VisionButton, config);
        }
    }
    
    /**
     * @memberof SharedComponentLibrary
     * @typedef { function } VisionButton~new
     * @param { object } config
     * @param { string } config.selector - The query selector string for the ID of the DOM object to replace with this render.
     * @param { object } config.props - The properties to pass into the component
     */
    VisionButtonAdd = {
        new: (config) => 
        {
            return this.createComponent(VisionButtonAdd, config);
        }
    }

    /**
     * @memberof SharedComponentLibrary
     * @typedef { function } VisionButton~new
     * @param { object } config
     * @param { string } config.selector - The query selector string for the ID of the DOM object to replace with this render.
     * @param { object } config.props - The properties to pass into the component
     */
    VisionButtonDelete = {
        new: (config) => 
        {
            return this.createComponent(VisionButtonDelete, config);
        }
    }
    
    /**
     * @memberof SharedComponentLibrary
     * @typedef { function } VisionButton~new
     * @param { object } config
     * @param { string } config.selector - The query selector string for the ID of the DOM object to replace with this render.
     * @param { object } config.props - The properties to pass into the component
     */
    VisionButtonEdit = {
        new: (config) => 
        {
            return this.createComponent(VisionButtonEdit, config);
        }
    }
}