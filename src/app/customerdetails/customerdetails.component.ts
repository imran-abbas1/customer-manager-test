import {AfterContentInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
// import {User} from '../signup/signup.component';
import {CustService} from '../custservice.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Customer} from '../customer.model';
// import {MapInfoWindow, MapMarker, GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  cust: Customer;
  constructor(private customerService: CustService) {
  }

  ngOnInit() {
    this.cust = this.customerService.SelectedCustomer;
  }
}
  /* @ViewChild(GoogleMap) map: GoogleMap
   @ViewChild(MapInfoWindow) info: MapInfoWindow

   zoom = 12;
   center: google.maps.LatLngLiteral;
   options: google.maps.MapOptions = {
     zoomControl: false,
     scrollwheel: false,
     disableDoubleClickZoom: true,
     mapTypeId: 'hybrid',
     maxZoom: 15,
     minZoom: 8,
   }
   markers = []
   infoContent = ''*/


  /*ngOnInit() {
    this.cust = this.customerService.SelectedCustomer;
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
}*/

  /*@ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  markerTypes = [
    {
      text: 'Parking', value: 'parking_lot_maps.png'
    }];

  selectedMarkerType = 'parking_lot_maps.png';

  isHidden = false;*/

  /*latitude: '51.678418';
  longitude: '7.809007';
  locationChosen = false;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  center = {lat: 24, lng: 12};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  display?: google.maps.LatLngLiteral;*/



  /*ngAfterContentInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    console.log(`selected marker: ${this.selectedMarkerType}`);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
    });
  }

  toggleMap() {
    this.isHidden = !this.isHidden;

    this.gmapElement.nativeElement.hidden = this.isHidden;
  }
*/
  /*setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }*/

  // Method
  /*onChooseLocation(event) {
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
      this.locationChosen = true;
  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }*/


  /*  this.route.paramMap.subscribe(params => {
      this.customers.forEach((dispCustomer: User) => {
        if (dispCustomer.email === params.get('id')) {
          this.customer = dispCustomer;
        }
      });
    });
  } */
