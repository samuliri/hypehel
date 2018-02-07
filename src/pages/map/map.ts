import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  markers: any;
  map: GoogleMap;
  showSelected : boolean = true;

  constructor(public viewCtrl: ViewController, navParams: NavParams, googleMaps: GoogleMaps, public geolocation: Geolocation) {
    this.markers = navParams.get('item');
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 60.1690059,
            lng: 24.940076800000033
          },
          zoom: 13,
          tilt: 30
        }
      };

      this.map = new GoogleMap('map', mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.showSelected = false;
        // Now you can use all methods safely.

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          this.map.addMarker({
            title: " You are here!",
            icon: 'red',
            animation: 'BOUNCE',
            position: {
              lat: data.coords.latitude,
              lng: data.coords.longitude
            }
          });
        });

        for(let i = 0 ; i < this.markers.length ; i++ ) {
          let obj = this.markers[i];
          if(obj.fields.location) {
            this.map.addMarker({
              title: " " + obj.fields.heading,
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: obj.fields.location.lat,
                lng: obj.fields.location.lon
              }
            });
          }
        }
      });
    }, (err) => {
      console.log(err);
    });
  }
}
