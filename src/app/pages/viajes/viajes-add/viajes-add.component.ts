import { MdDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";
import { } from 'googlemaps';

@Component({
  selector: 'app-viajes-add',
  templateUrl: './viajes-add.component.html',
  styleUrls: ['./viajes-add.component.scss']
})
export class ViajesAddComponent implements OnInit {

  private addData: any = {};

  @ViewChild("searchTo") public searchElementRef: ElementRef;
  @ViewChild("searchFrom") public searchFromElementRef: ElementRef;

  private placeFrom: any;
  private placeTo: any;

  private latitude: number;
  private longitude: number;
  private latitudeFrom: number;
  private longitudeFrom: number;
  private searchControl: FormControl;
  private searchControlFrom: FormControl;
  
  private transport: string = 'AUTO';

  private searchCar: string = '';
  private selectedCar: any;
  private carDistance: any;
  private gasPrice: number = 17;
  private gasEstimate: number;

  private flightPrice: number;
  private flightDetails: string;

  private needHotel: boolean = false;
  private hotelPrice: number = 0;
  private hotelInfo: string = '';

  private travelName: string;

  constructor(
    private ref: MdDialogRef<ViajesAddComponent>,
    private mapsLoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  addViaje(data: any) {
    let _data = {
      name: this.travelName,
      transport: this.transport,
      user: localStorage.getItem('user'),
      coordsFrom: {
        lat: this.latitudeFrom,
        lng: this.longitudeFrom
      },
      coordsTo: {
        lat: this.latitude,
        lng: this.longitude
      },
      placeFrom: {
        address_components: this.placeFrom.address_components,
        formatted_address: this.placeFrom.formatted_address,
        id: this.placeFrom.id,
        name: this.placeFrom.name,
        place_id: this.placeFrom.place_id,
        url: this.placeFrom.url
      },
      placeTo: {
        address_components: this.placeTo.address_components,
        formatted_address: this.placeTo.formatted_address,
        id: this.placeTo.id,
        name: this.placeTo.name,
        place_id: this.placeTo.place_id,
        url: this.placeTo.url
      },
      hotel: this.needHotel ? {
        info: this.hotelInfo,
        price: this.hotelPrice
      } : false,
      flight: this.transport == 'AVION' ? {
        details: this.flightDetails,
        price: this.flightPrice
      } : null
    };
    this.ref.close(_data);
  }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.searchControlFrom = new FormControl();

    this.mapsLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {types: ["address"]});
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.placeFrom = place;
          if (place.geometry === undefined || place.geometry === null) return;
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });

      let autocompleteFrom = new google.maps.places.Autocomplete(this.searchFromElementRef.nativeElement, {types: ["address"]});
      autocompleteFrom.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocompleteFrom.getPlace();
          this.placeTo = place;
          if (place.geometry === undefined || place.geometry === null) return;
          this.latitudeFrom = place.geometry.location.lat();
          this.longitudeFrom = place.geometry.location.lng();
        });
      });

    });
  }

}
