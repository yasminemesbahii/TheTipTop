import { Component, OnInit } from '@angular/core';
import { ApiAppService } from 'src/app/Service/api-app.service';
import { ServiceService } from 'src/service/service.service';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-reclamation-employer',
  templateUrl: './reclamation-employer.component.html',
  styleUrls: ['./reclamation-employer.component.less']
})
export class ReclamationEmployerComponent implements OnInit {

  constructor(public apiService:ApiAppService,public service:ServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.getPrix()
  }
  sideBarOpen=true
  
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  public emails;
  getPrix(){
    
    this.apiService.getReclamation()
    .subscribe((data):any => {
         this.emails =data["result"]
         console.log(this.emails)
      },error=>{
        console.log(error);
      })
    
  }
  addEtat_Repond(uid:any) {
    this.service.update_etatRepond(uid)
      .subscribe(data => {
        console.log(data)
        this.toast.success({detail:"Success Message",summary:'Repondu',duration:5000});
      })  
      
  }

}
