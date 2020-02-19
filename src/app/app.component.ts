import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    breakpointObserver:BreakpointObserver
    ){
    //this.isSmall=breakpointObserver.isMatched('(max-width:500px)');
    breakpointObserver.observe(Breakpoints.Handset).subscribe(
      (result)=>{
        console.log(result.matches);
        this.isSmallObs=result.matches;
      }
    );
  }
 
  ngOnInit(){
    // this.router.events
    // .subscribe((event) => {
    //     console.log('NavigationEnd:', event);
    // });

    // this.router.events
    // .filter((event) => event instanceof NavigationEnd)
    // .subscribe((event) => {
    //   console.log('NavigationEnd:', event);
    // });
    
    // this.router.events.pipe(
    //   filter((event:Event) => event instanceof NavigationEnd)
    // ).subscribe(x => console.log(x))

    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      ).subscribe(event => {
        console.log('NavigationEnd:',event);
        this.titleService.setTitle(event['title']);
      });
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
