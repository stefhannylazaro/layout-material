import { Component, OnInit } from '@angular/core';
import { marketI } from '../../models/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public lat:number=-8.1035219;
  public lng:number=-79.0324479;
  public zoom:number=12;
  public markers:Array<marketI>;
  public selectedM:marketI;
  constructor() { }

  ngOnInit() {
    this.markers = [
      {lat:-8.0941534, lng:-79.027813, label:"Truj..."},
      {lat:-8.1013285, lng:-79.0147346, label: "Chicl...."},
      {lat:-8.1011798, lng:-79.0099924, label: "Piu...."},
    ];

    console.log(this.markers);
  }

  selectedMarker($event){
    this.selectedM= {lat:$event.latitude, lng:$event.longitude, label:$event.label};
    console.log(this.selectedM);
  }

  dragEndMarker(marker:marketI,$event){
    console.log($event);
  }
}
