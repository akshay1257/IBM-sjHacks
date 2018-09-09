import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import{Donor} from './donor';
import 'rxjs/add/operator/map';


@Injectable()
export class DonorService {

  constructor(private http: Http) { }
  
  //get requirements
  getRequirements(){

    return this.http.get('https://7647c8e2.ngrok.io/get_items').map(res=> res.json);
  }
  //send a request
  addHelp(newDonor){
    var headers =  new Headers();
    headers.append('Content-Type' , 'application/json');
    return this. http.post('http://localhost:3000/api/contact' , newDonor,{headers:headers})
    .map(res => res.json());
  }

}
