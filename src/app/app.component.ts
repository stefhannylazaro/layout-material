import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'layout-material';
  linksTheme:Array<any>;
  categories:Array<any>;
  categorie = new FormControl('0');
  constructor(){
    this.linksTheme=[
      {
        text: 'Filled',
        icon: 'home',
        link: '/',
      },
      {
        text: 'Outlined',
        icon: 'home',
        link: '/',
      },
      {
        text: 'Rounded',
        icon: 'home',
        link: '/',
      },
      {
        text: 'Two-tone',
        icon: 'home',
        link: '/',
      },
      {
        text: 'Sharp',
        icon: 'home',
        link: '/',
      }
    ];
    this.categories=[
      {name:'All',value:'0'},
      {name:'Action',value:'1'},
      {name:'Alert',value:'2'},
      {name:'Av',value:'3'}
    ]
  }
}
