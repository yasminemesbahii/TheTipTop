import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.less']

})
export class SubscribeComponent implements OnInit  {
  email:any
  sideBarOpen=true;
  constructor(public service:ServiceService) { }
  
  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  AddSubscribe() {
    this.service.Subscribed(this.email)
      .subscribe(data => {
        console.log(data)
        swal.fire('Merci pour votre abonnement','Souscrit avec succès','success').then((res)=>{
            if(res.value){
              window.location.reload();
            }
        })
      })  
  }
}
