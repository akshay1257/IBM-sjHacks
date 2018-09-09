import { Component, OnInit } from '@angular/core';
import {DonorService} from '../donor.service';
import {Donor} from '../donor';

@Component({
  selector: 'app-donors',
 templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css'],
  providers:[DonorService]
})
export class DonorsComponent implements OnInit {
  
  donors: Donor[];
  donor: Donor;
 
  items: {
    comforter: String,
    bedsheets: String,
    itmineral_waterem3: String,
    scarfs: String,
    Sugar: String
 };

 
  constructor(private donorService: DonorService) { }
  
  ngOnInit() { 
    this.donorService.getRequirements()
    .subscribe(
      donors => this.donors = donors);
}



}
