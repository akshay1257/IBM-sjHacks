import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import{Donor} from './donor';
import 'rxjs/add/operator/map';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class DonorService {

  constructor(private http: Http) { }
  donothing()
  {}
  //get requirements

  getRequirements(){
    
    console.log("going1");
    return this.http.get('http://localhost:3000/api/contacts').map(res=> res.json()); //
    //var data= new Observable<{"comforter": 1600, "bedsheets": 300, "mineral water": 900, "scarfs": 2920, "Sugar": 300}>();
    //return data;

    //var obj = this.http.get('https://7647c8e2.ngrok.io/get_items').map(res=> res.json());
    //return obj[Object.keys(obj)[0]];
    
  }
  
  //send a request
 // addHelp(newDonor){
   // var headers =  new Headers();
    //headers.append('Content-Type' , 'application/json');
    //return this. http.post('http://localhost:3000/api/contact' , newDonor,{headers:headers})
    //.map(res => res.json());
 // }

}
