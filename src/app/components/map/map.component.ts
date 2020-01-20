import { Component, OnInit, NgZone} from '@angular/core';
import { } from 'googlemaps';
//declare var google: any;

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
  public zoom:number = 14;
  public selectedMarker:Marker;
  public type:string = "roadmap";
  public markers:Array<Marker>;
  
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    console.log("direccion");
    
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
    console.log(this.selectedMarker);
    console.log(this.getAddress(-8.1167508, -79.0283711));
  }

  markerDragEnd(marker: Marker, $event, index:number) {
    console.log('dragEnd', marker, $event);
    this.markers[index].lat=$event.coords.lat;
    this.markers[index].lng=$event.coords.lng;
  }
   
  
  getAddress(lat, lng) {
    console.log("holaa");
    new google.maps.LatLng(this.lat, this.lng);
    const geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    const request: google.maps.GeocoderRequest = {
      location: latlng
    };
    geocoder.geocode(request, (results, status) => {
      this.ngZone.run(() => {
        const address = results[0].formatted_address;
        return address
      });
    });
  }    
}
