import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAppService } from 'src/app/Service/api-app.service';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.less']
})
export class UserDashbordComponent implements OnInit {
sideBarOpen=true
  
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  nom:any
  prenom : any
  email: any;
  telephone : any;
  message: any
  
    constructor(public service:ApiAppService,public router: Router,private toast:NgToastService) { }
  
    ngOnInit(): void {
    }
    OnSubmit(){
      this.service.sendMessage(this.nom,this.prenom,this.email,this.telephone,this.message).subscribe(data=>{
        if(data){
        this.toast.success({detail:"success Message",summary:'message envoyé',duration:5000});
        console.log(data);
        }
        else{
          this.toast.error({detail:"error Message",summary:'message echoue',duration:5000});
        }
      })
    }
}
