import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { ApiAppService } from 'src/app/Service/api-app.service';
import { ServiceService } from 'src/service/service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  nom:any
  prenom : any
  email1: any;
  telephone : any;
  message: any
  email :any;
  RefP:any
  UserId:any = localStorage.getItem('idUser');
  NomUser:any = localStorage.getItem('nomUser');
  cookiebox:boolean = false;
  isnavigate:boolean=false;
  sideBarOpen=true;
  emailUser:any=localStorage.getItem('emailUser')
  nomUser:any=localStorage.getItem('nomUser')
  prenomUser:any=localStorage.getItem('prenomUser')

TokenAdmin:any=localStorage.getItem('TokenAdmin');

 TokenUser:any=localStorage.getItem('TokenUser');

 TokenEmployer:any=localStorage.getItem('TokenEmployer');

 connecterUser:boolean=false;

 connecterAdmin:boolean=false;

 connecterEmployer:boolean=false;

 isLogin:boolean=true;
 constructor(public service:ServiceService,private router: Router,private coockie:CookieService,private toast: NgToastService,private api:ApiAppService) { }


  ngOnInit(): void {

     this.TesteEncoursConnecter();
     this.Check();

  }
  OnSubmit(){
    this.api.sendMessage(this.nom,this.prenom,this.email1,this.telephone,this.message).subscribe(data=>{
      swal.fire('votre Reclamation envoyer','success').then((res)=>{
        if(res.value){
          window.location.reload();
        }
    })
      console.log(data);
    })
  }

 TesteEncoursConnecter(){

   if(this.TokenAdmin!=null){

    this.connecterAdmin=true;

    this.connecterUser=false;

    this.connecterEmployer=false;

    this.isLogin=false;

   }

   if(this.TokenEmployer!=null){

    this.connecterAdmin=false;

    this.connecterUser=false;

    this.connecterEmployer=true;

    this.isLogin=false;

   }

   if(this.TokenUser!=null){

    this.connecterAdmin=false;

    this.connecterUser=true;

    this.connecterEmployer=false;

    this.isLogin=false;

   }

 }
 Check(){
  const cheaking=   this.coockie.check('data')
  if(cheaking){
        this.cookiebox=false;
  }
  else{
    this.cookiebox=true;
  }
 }
 Allow(){
   this.coockie.set('email',this.emailUser,{expires:1})
   this.coockie.set('nom',this.nomUser,{expires:2})
   this.coockie.set('prenom',this.prenomUser,{expires:3})
   this.cookiebox=false;
 }
 Decline(){
    this.cookiebox = false;
 }
 Delete(){
   this.coockie.delete('data');
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