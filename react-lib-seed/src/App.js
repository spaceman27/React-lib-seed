import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import { VisionButton, VisionButtonAdd, VisionButtonEdit, VisionButtonDelete } from './components/VisionButton/index';
import VisionSelectList from './components/VisionSelectList/VisionSelectList';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@progress/kendo-theme-default/dist/all.css';
import "font-awesome/css/font-awesome.css";

class App extends Component {
  onClick = () => {
    alert('clicked');
  }
  render() {
    return (
      <div>
        <NavigationMenu 
          icons={this.getIcons()} 
          title="AirportVision" 
          loggedInLabel="Logged in as: " 
          userName="sti\cbell" 
          ipAddressLabel="IP: " 
          ipAddress="0.0.0.0" 
          logoutLabel="logout" 
          logoutEvent={() => alert('this is where we log out')}
          hostNameLabel="Host: "
          hostName="sti.cbell-10">
        </NavigationMenu>
        <VisionButton click={this.onClick}>My Button</VisionButton>
        <VisionButton click={this.onClick} disabled={true}></VisionButton>

        <VisionButtonAdd click={this.onClick}></VisionButtonAdd>
        <VisionButtonAdd click={this.onClick} disabled={true}></VisionButtonAdd>

        <VisionButtonEdit click={this.onClick}></VisionButtonEdit>
        <VisionButtonEdit click={this.onClick} disabled={true}></VisionButtonEdit>

        <VisionButtonDelete click={this.onClick}></VisionButtonDelete>
        <VisionButtonDelete click={this.onClick} disabled={true}></VisionButtonDelete>

        <VisionSelectList></VisionSelectList>
        
      </div>
    );
  }
  getListData() {
    return [
      {
        "id": 11,
        "key": "American A380",
        "site": null,
        "fields": {
          "aa-2-1": {
            "field": "aa-2",
            "instance": 1,
            "value": "abc",
            "readOnly": false
          },
          "shuttle-1": {
            "field": "shuttle",
            "instance": 1,
            "value": "sdasad",
            "readOnly": false
          },
          "test1-1": {
            "field": "test1",
            "instance": 1,
            "value": "sad",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 14,
        "key": "American Class  2",
        "site": null,
        "fields": {
          "aa-2-1": {
            "field": "aa-2",
            "instance": 1,
            "value": "ss",
            "readOnly": false
          },
          "aircraft-1-1": {
            "field": "aircraft-1",
            "instance": 1,
            "value": "asd",
            "readOnly": false
          },
          "dl-1-1": {
            "field": "dl-1",
            "instance": 1,
            "value": "AA",
            "readOnly": false
          },
          "shuttle-1": {
            "field": "shuttle",
            "instance": 1,
            "value": "asdw",
            "readOnly": false
          },
          "test1-1": {
            "field": "test1",
            "instance": 1,
            "value": "sada",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 85,
        "key": "asda",
        "site": null,
        "fields": {},
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 87,
        "key": "asda",
        "site": null,
        "fields": {},
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 12,
        "key": "BA Test",
        "site": null,
        "fields": {
          "aa-2-1": {
            "field": "aa-2",
            "instance": 1,
            "value": "BA",
            "readOnly": false
          },
          "aircraft-1-1": {
            "field": "aircraft-1",
            "instance": 1,
            "value": "",
            "readOnly": false
          },
          "dl-1-1": {
            "field": "dl-1",
            "instance": 1,
            "value": "",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 84,
        "key": "Delta by row",
        "site": null,
        "fields": {
          "linecode-1": {
            "field": "linecode",
            "instance": 1,
            "value": "DL",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 1,
        "key": "Delta by zone",
        "site": null,
        "fields": {
          "linecode-1": {
            "field": "linecode",
            "instance": 1,
            "value": "DL",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 15,
        "key": "Etihad by Class",
        "site": null,
        "fields": {
          "linecode-1": {
            "field": "linecode",
            "instance": 1,
            "value": "EY",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 89,
        "key": "Test1",
        "site": null,
        "fields": {
          "aa-2-1": {
            "field": "aa-2",
            "instance": 1,
            "value": "",
            "readOnly": false
          },
          "dl-1-1": {
            "field": "dl-1",
            "instance": 1,
            "value": "aa",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 86,
        "key": "Test 21324",
        "site": null,
        "fields": {},
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 4,
        "key": "United by Class",
        "site": null,
        "fields": {
          "linecode-1": {
            "field": "linecode",
            "instance": 1,
            "value": "UA",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      },
      {
        "id": 3,
        "key": "United by Row",
        "site": null,
        "fields": {
          "linecode-1": {
            "field": "linecode",
            "instance": 1,
            "value": "UA",
            "readOnly": false
          }
        },
        "links": [
          {
            "rel": "items",
            "href": null,
            "operations": null,
            "linkedEntities": []
          }
        ]
      }
    ]
  }
  
  getIcons = () => {
    return [{
      label: 'test 1',
      iconClick: (dest) => { window.location.href = dest.destination},
      icon: '',
      fontAwesomeClass: 'fas fa-plane',
      destination: 'http://google.com/'
    },{
      label: 'test 2',
      iconClick: (dest) => { window.location.href = dest.destination},
      icon: '',
      fontAwesomeClass: 'fab fa-google',
      destination: 'http://google.com/'
    },{
      label: 'test 3',
      iconClick: (dest) => { window.location.href = dest.destination},
      icon: '',
      fontAwesomeClass: 'fab fa-google',
      destination: 'http://google.com/'
    },{
      label: 'test 4',
      iconClick: (dest) => { window.location.href = dest.destination},
      icon: '',
      fontAwesomeClass: 'fab fa-google',
      destination: 'http://google.com/'
    }]
  };
}
export default CSSModules(App, styles);
