import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { response } from 'express';
import { ApiAppService } from '../Service/api-app.service';
//import { ElementRef }from '@angular/core' ;
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { json } from 'body-parser';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //@ViewChild('confirmPassword' , {static : false}) confirmPassword : ElementRef;
  genreValues =[
    {name: 'Homme' , value : 'home'},
    {name: 'Femme' , value : 'femme'},
    {name: 'Autre' , value : 'autre'},

]
UserRegistrationForm : FormGroup
  constructor(public apiApp : ApiAppService, public router : Router ) {
    this.UserRegistrationForm = new FormGroup({
      nom : new FormControl('',[Validators.required]),
      prenom : new FormControl('',[Validators.required]),
      genre : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.email,Validators.required]),
      telephone : new FormControl('',[Validators.required]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/),
      ])
    })
  }

  ngOnInit(): void {

  }

  onSubmit() : void{
    this.getUsers()
    setTimeout(() => {
    if(this.UserRegistrationForm.valid && this.UserRegistrationForm.value.password===this.UserRegistrationForm.value.password && this.taille!==this.UserRegistrationForm.value.email){

      console.log('User form  value is ', this.UserRegistrationForm.value)
      this.apiApp.registerUser(this.UserRegistrationForm.value).subscribe(res =>{
        if(res && res['status']==='ok' && res['data']['_id']){
          this.router.navigate(['/login'])
          localStorage.setItem('emailUser',res['data']['email'])
        }
      })
   }
     else if (this.UserRegistrationForm.get('password').invalid){
      swal.fire('Vérification', 'Veuillez saisir un mot de passe de 8 caractère minimum, avec une majuscule et un chiffre.', 'warning')
    }
    else{
      swal.fire('Vérification','Votre email est déja utilisé','warning')
    }

  }, 1500);
  }
  public users:string[];
  public taille;
  getUsers(){

    this.apiApp.emailused(this.UserRegistrationForm.value.email)
    .subscribe(data => {
      this.taille=data["result"][0]["email"]
      console.log(this.taille);
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
