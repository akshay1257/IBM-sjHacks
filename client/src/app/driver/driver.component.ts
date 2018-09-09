import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {DriverService} from '../driver.service';
import {Driver}  from '../driver'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  providers:[DriverService]
})
export class DriverComponent implements OnInit {
  newPost='No Content';
  addresses:Driver[];
  addres:Driver;
  address:string;
  constructor(private driverService: DriverService) { }

  onAddPost(postInput:HTMLTextAreaElement){
    //alert('Post Added')
    this.newPost=postInput.value;
  }

  addDriver(){

    const newadd={
      addr:this.address
    }
    this.driverService.addAddress(newadd)
      .subscribe(addres=>{
          console.log(newadd)
          var dat={}
          console.log( this.addres)
          dat=this.addres
          for(var key in dat ){
            var val=dat[key];
            console.log(val );
          }
          console.log('Hello')
          this.addresses.push(this.addres);
          //console.log('Hello')
      });
    
  }

  showMap(){
    
  }
  ngOnInit() {
      
  }

}