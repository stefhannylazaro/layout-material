import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'layout-material';
  public listThemes:Array<any>;
  public listCategories:Array<any>;
  public selectedCategory= new FormControl('0');//propiedad select
  public isSmall:boolean;
  public isSmallObs:boolean=false;
  constructor(breakpointObserver:BreakpointObserver){
    //this.isSmall=breakpointObserver.isMatched('(max-width:500px)');
    breakpointObserver.observe(Breakpoints.Handset).subscribe(
      (result)=>{
        console.log(result.matches);
        this.isSmallObs=result.matches;
      }
    );
  }
 
  ngOnInit(){
    this.listThemes=[
      {
        id:1,
        name:'Filled',
        icon:'home',
        link:'filled',
      },
      {
        id:2,
        name:'Outlined',
        icon:'crop_square',
        link:'outlined',
      },
      {
        id:3,
        name:'Rounded',
        icon:'lens',
        link:'outlined',
      },
      {
        id:4,
        name:'Two-tone',
        icon:'home',
        link:'home',
      },
      {
        id:5,
        name:'Sharp',
        icon:'home',
        link:'home',
      }
    ];
    this.listCategories=[
      {name:'all',value:'0'},
      {name:'Action',value:'1'},
      {name:'Alert',value:'2'},
      {name:'Av',value:'3'},
      {name:'Communication',value:'4'},
    ]
  }
}
