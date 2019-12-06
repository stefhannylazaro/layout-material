import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-pipe',
  templateUrl: './extra-pipe.component.html',
  styleUrls: ['./extra-pipe.component.css']
})
export class ExtraPipeComponent implements OnInit {
  public fecha:object;
  public txt:string;
  constructor() { }

  ngOnInit() {
    this.fecha=new Date();
    this.txt="Hola";
  }

}
