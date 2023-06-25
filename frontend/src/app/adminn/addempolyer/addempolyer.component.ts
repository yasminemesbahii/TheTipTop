import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { response } from 'express';
import { ApiAppService } from '../../Service/api-app.service';
//import { ElementRef }from '@angular/core' ;
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-addempolyer',
  templateUrl: './addempolyer.component.html',
  styleUrls: ['./addempolyer.component.less']
})
export class AddempolyerComponent implements OnInit {
  @ViewChild('sidebar') sidebar: MatDrawer;
  sideBarOpen = false;
  closeSidebar() {
    this.sidebar.close();
  }
  genreValues = [
    { name: 'Homme', value: 'home' },
    { name: 'Femme', value: 'femme' },
    { name: 'Autre', value: 'autre' },
  ]

  UserRegistrationForm: FormGroup
  constructor(public apiApp: ApiAppService, public router: Router) {
    this.UserRegistrationForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      isAdmin: new FormControl('', [Validators.required]),

    })
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {

  }
  onSubmit(): void {
    this.getUsers()
    setTimeout(() => {
      if (this.UserRegistrationForm.valid && this.UserRegistrationForm.value.password === this.UserRegistrationForm.value.password && this.taille !== this.UserRegistrationForm.value.email) {

        console.log('User form  value is ', this.UserRegistrationForm.value)
        this.apiApp.registerEMP(this.UserRegistrationForm.value).subscribe(res => {
          if (res && res['status'] === 'yes' && res['data']['_id']) {
            this.router.navigate(['/login'])
            localStorage.setItem('emailEmployer', res['data']['email'])
          }
        })
      }

      else {
        swal.fire('Vérification', 'Votre email est déja utilisé', 'warning')
      }

    }, 1500);
  }
  public users: string[];
  public taille;
  getUsers() {

    this.apiApp.emailused(this.UserRegistrationForm.value.email)
      .subscribe(data => {
        this.taille = data["result"][0]["email"]
        console.log(this.taille);
      }, error => {
        console.log(error);
      })

  }


  onHome() {
    this.router.navigate(['/home'])

  }
  onLogin() {
    this.router.navigate(['/login'])

  }
  onRegister() {
    this.router.navigate(['/sign-up'])

  }
  onAboutUS() {
    this.router.navigate(['/aboutUS'])

  }
}
