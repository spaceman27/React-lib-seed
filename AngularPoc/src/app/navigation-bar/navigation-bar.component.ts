import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import * as ComponentFactory from 'shared-components/js/component-factory';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnChanges {

  @Input() text = 'React Component - unbound';
  icons: any[] = [
    {
      label: 'Google',
      icon: '',
      fontAwesomeClass: 'fas fa-plane',
      destination: 'http://google.com/',
      iconClick: (icn: any) => { alert('This button is bound from an angular4 applicatioN!'); },
    }
  ];

  navProps: any = {
    icons: this.icons,
    title: 'This is a REACT component' ,
    loggedInLabel: 'Logged in as: ' ,
    userName: 'sti\\cbell' ,
    ipAddressLabel: 'IP: ' ,
    ipAddress: '0.0.0.0' ,
    logoutLabel: 'logout' ,
    logoutEvent: () => alert('This is an event bound from the Angular4 application!'),
    hostNameLabel: 'Host: ',
    hostName: 'sti.cbell-10'
  };

  constructor() { }

  ngOnChanges(changes: any): void {
  }

  ngOnInit() {
    const componentFactory = new ComponentFactory.default();
    const navMenu = componentFactory.NavigationMenu.new({selector: '#react-placeholder', props: this.navProps});
    navMenu.render();
  }
}
