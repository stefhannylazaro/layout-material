import { Component, OnInit } from '@angular/core';
interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  public lat:number = -8.1167508;
  public lng:number = -79.0283711;
  public zoom:number = 10;
  public selectedMarker:Marker;
  public type:string = "roadmap";
  public markers:Array<Marker>;
  constructor() { }

  ngOnInit() {
    this.markers = [
      { lat: -8.1167508, lng: -79.028371, label: 'Trux' },
      { lat: -8.0898141, lng: -78.9782459, label: 'a'}
    ];
  }

  selectMarker($event) {
    this.selectedMarker = {
      lat: $event.latitude,
      lng: $event.longitude
    };
  }

  markerDragEnd(marker: Marker, $event) {
    console.log('dragEnd', marker, $event);
  }
}
