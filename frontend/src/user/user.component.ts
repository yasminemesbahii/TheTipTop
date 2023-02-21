import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  RefP:any
  UserId:any = localStorage.getItem('idUser');
  NomUser:any = localStorage.getItem('nomUser');
  cookiebox:boolean = false;
  isnavigate:boolean=false;
  sideBarOpen=true;
  emailUser:any=localStorage.getItem('emailUser')
  nomUser:any=localStorage.getItem('nomUser')
  prenomUser:any=localStorage.getItem('prenomUser')
  constructor(public service:ServiceService,private router: Router,private coockie:CookieService,private toast: NgToastService) { }
   
  ngOnInit(): void {  
    // this.fetchRef_P()
    this.getUsers()
    this.getLots()
    this.Check()
    
   
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
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
  fetchRef_P(){
    this.getRef_P()
    setTimeout(() => {
    if(this.ref==this.RefP && this.utilise==false){
      this.AddTicketTouser()
     this.service.loading()
      setTimeout(() => {
        
        this.router.navigate(['/roue'],{skipLocationChange:false})
        
      }
      , 1500);
     
    }else{
     // alert('votre Ref_Participation non valide')
      this.toast.warning({detail:"Warning Message",summary:'votre Ref_Participation deja utilisé',duration:5000});
    }
  }
  , 1000);
  }
  public ref; 
  public user;
  public utilise;
  public testIsvalidTicket;
 // public etat:boolean=false;
    getRef_P(){
      try {
      this.service.get_refParticipation(this.RefP)
      .subscribe(data => {
        this.testIsvalidTicket=data["doc"]
        console.log(this.testIsvalidTicket)
        if(this.testIsvalidTicket){
           this.ref=data["doc"]["ref_participation"]
           localStorage.setItem('Refp',this.ref)
           this.utilise=data["doc"]["utilise"]
           this.user = data["doc"]
           console.log(this.ref)
      }else{
        console.log("On a pas trouver votre ref_participation!")
      }
    }
      )
    } catch (error) {
        error
    }
      
    }
    public etat_P;
    public NumberOfuser=[];
    getUsers(){
      this.service.getUser(this.UserId)
      .subscribe(data => {
        this.etat_P=data["result"]["Etat_P"]
        this.NumberOfuser=data["result"]
           console.log(this.etat_P)
        },error=>{
          console.log(error);
        })
    }
    public Lots:any[]=[]
    public taille;
    
    getLots(){
      this.service.get_lotS_H(this.UserId)
      .subscribe(data => {
        this.taille =data["result"];
   if(this.taille){
      for (let i = 0; i < this.taille.length - 1; i++ ) {
        
        this.Lots[i]=this.taille[i]["lots"]["description"]
       
     }
     console.log(this.Lots)
    }else{
      console.log('Vide')
    }
      })
   }

   AddTicketTouser(){
    this.service.addticketUser(this.UserId,this.RefP)
      .subscribe(data => {
        console.log("Ticket Set to User")
      })  
  }
}
  
 
  
    

