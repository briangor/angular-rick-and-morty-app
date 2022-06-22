import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations = new Array();
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocations()
    .subscribe((res) => {
      this.locations = res.results;
      //console.log(res);
    })
  }
}
