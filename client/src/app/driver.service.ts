import { Injectable } from '@angular/core';
declare var angular: any;

import {Http, Headers} from '@angular/http';
import{Driver} from './driver';
import 'rxjs/add/operator/map';


@Injectable()
export class DriverService {

  constructor(private http: Http) { }

  addAddress(newAddress){
        var headers= new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', '*');
        
        // var dat={}
        // dat={ "coord_1": {
        //     "name": "Sam Johnson",
        //     "d_id": "12345",
        //     "phone": "213213212",
        //     "lat": "37.3351874",
        //     "lng": "-121.8810715",
        //     "addr": "1 Washington Sq San Jose CA 95116"
        // }}
        // var log={}
        // var l=dat["coord_1"]
        // console.log("I am here");
        // console.log(l);
        // for(var key in l){
        //     var val=l[key];
        //     console.log(val);
        // }

        return this.http.post('https:drive4good-surprised-antelope.mybluemix.net/driver_see_pickups', newAddress, {headers:headers})
                .map(res=>res.json)
                //sconsole.log('Inservice')
                //console.log(data)
                
                //return data


  }

}