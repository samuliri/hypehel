import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  markers: any;
  map: GoogleMap;

  constructor(public viewCtrl: ViewController, navParams: NavParams, googleMaps: GoogleMaps) {
    this.markers = navParams.get('item');
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 60.1690059,
          lng: 24.950076800000033
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = new GoogleMap('map', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      // Now you can use all methods safely.
      this.map.addMarker({
          title: this.markers,
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 60.1690059,
            lng: 24.950076800000033
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              //alert(this.markers);
            });
        });
    });
  }
}
