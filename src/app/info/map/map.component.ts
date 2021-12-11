import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {


  constructor() {
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const zoomLevel = 30;
    var map = L.map('map', {
      center: [50.45226, 3.98618],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(map);

    var myIcon = L.icon({
      // iconUrl: 'my-icon.png',
      iconUrl: 'data:image/png;base64,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',
      iconSize: [50, 80],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });

    L.marker([50.45226, 3.98618], {icon: myIcon}).addTo(map);
    //   const descriptionWikipedia = `
    //     Le parc du Thabor, situé à Rennes à proximité du centre-ville,
    //     est un parc public aménagé sur plus de dix hectares dont la particularité est de mêler un jardin à la française,
    //     un jardin à l’anglaise et un important jardin botanique.`;
    //   const popupOptions = {
    //     coords: parcThabor,
    //     text: descriptionWikipedia,
    //     open: true
    //   };
    //   this.addMarker(popupOptions);
    // }
    //
    // addMarker({coords, text, open}) {
    //   const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    //   if (open) {
    //     marker.addTo(this.map).bindPopup(text).openPopup();
    //   } else {
    //     marker.addTo(this.map).bindPopup(text);
    //   }
    // }

  }
}
