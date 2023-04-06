import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ApiAppService } from '../Service/api-app.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm : FormGroup;
    email1='admin@gmail.com' 
    password1='TipTopBOSSnice'
  
  email:any;
   password :any;
   emailUser:any=localStorage.getItem('emailUser');
  constructor(public apiApp : ApiAppService, public router : Router,private toast:NgToastService) {
    this.loginUserForm = new FormGroup ({
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , Validators.required)
    })
    
   }

   
  ngOnInit(): void {
    this.getUsers()
  }

  OnSubmit(){
    if(this.email==this.email1 && this.password==this.password1){
      localStorage.setItem('emailAdmin',this.email)
      localStorage.setItem('TokenAdmin','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2NDU4ZGRiNjIxMjlkNWM4ZWFmNzYiLCJlbWFpbCI6Im1vdXJhZGFtZWhpb3UyMEBnbWFpbC5jb20iLCJpYXQiOjE2Njk3NDQ4NjIsImV4cCI6MTY2OTc0ODQ2Mn0.zHXq0Lq-vExLSwTceuNpzt_XPWrMfVQCtHVMaUNqOAb')
      this.router.navigate(['/admin'])
    }
    if(this.loginUserForm.valid ){
      console.log('dazt')
      this.apiApp.login(this.loginUserForm.value).subscribe(res =>{
        console.log(res)
       
        if(res['data']['existAdmin']['isAdmin']==false){
          console.log('dazt')
          localStorage.setItem('TokenUser',res['data']['AuthToken'])
          localStorage.setItem('idUser',res['data']['existAdmin']['_id'])
          localStorage.setItem('nomUser',res['data']['existAdmin']['nom'])
          localStorage.setItem('prenomUser',res['data']['existAdmin']['prenom'])
          localStorage.setItem('emailUser',res['data']['existAdmin']['email'])
          this.router.navigate(['/user'])
        }
        else
        if(res['data']['existAdmin']['isAdmin']==true){
          console.log('dazt EMP')
          localStorage.setItem('TokenEmployer',res['data']['AuthToken'])
          localStorage.setItem('nomEmployer',res['data']['existAdmin']['nom'])
          localStorage.setItem('prenomEmployer',res['data']['existAdmin']['prenom'])
          localStorage.setItem('emailEmployer',res['data']['existAdmin']['email'])
          

          this.router.navigate(['/ReclamationEMP'])
        }
        
      }, (err) =>{
        if(err){
         
          console.log('we got in error')
        }
       } )
      }
      else{
        this.toast.info({detail:"info",summary:'Ce compte nexiste pas',duration:5000});
       
      }
      //console.log(this.loginUserForm.value)
}
public users:string[];
  public taille;
  getUsers(){
  
    this.apiApp.emailused(this.emailUser)
    .subscribe(data => {
     
      this.taille=data["result"][0]["email"]
      
      },error=>{
        console.log(error);
      })
      
    }
onHome(){
  this.router.navigate(['/home'])

}
onLogin(){
  this.router.navigate(['/login'])

}
onRegister(){
  this.router.navigate(['/sign-up'])

}
onAboutUS(){
  this.router.navigate(['/aboutUS'])

}
}
