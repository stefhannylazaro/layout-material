import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'layout-material';
  public listThemes:Array<any>;
  public listCategories:Array<any>;
  constructor(){
  }
  ngOnInit(){
    this.listThemes=[
      {
        id:1,
        name:'Filled',
        icon:'home',
        link:'/',
      },
      {
        id:2,
        name:'Outlined',
        icon:'home',
        link:'/',
      },
      {
        id:3,
        name:'Rounded',
        icon:'home',
        link:'/',
      },
      {
        id:4,
        name:'Two-tone',
        icon:'home',
        link:'/',
      },
      {
        id:5,
        name:'Sharp',
        icon:'home',
        link:'/',
      }
    ];
    this.listCategories=[
      {name:'all',value:''},
      {name:'Action',value:'1'},
      {name:'Alert',value:'2'},
      {name:'Av',value:'3'},
      {name:'Communication',value:'4'},
    ]
  }
}
