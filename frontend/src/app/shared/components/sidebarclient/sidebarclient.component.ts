import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { NgToastService } from 'ng-angular-popup'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.less']
})
export class SidebarclientComponent implements OnInit {

  constructor(public service:ServiceService,private toast:NgToastService,public router : Router) { }
  emailUser:any=localStorage.getItem('emailUser')
  nomUser:any=localStorage.getItem('nomUser')
  prenomUser:any=localStorage.getItem('prenomUser')
  idU:any=localStorage.getItem('idUser')
  ngOnInit(): void {
  }
  deleteAcc(){
    if(confirm('Etes-vous sur de supprimer votre compte')){
    this.service.deleteAccount(this.idU)
    .subscribe(data => {
      if(data){
        localStorage.removeItem('TokenUser');
        this.router.navigate(['/home'])
        localStorage.removeItem('emailUser')
      this.toast.success({detail:"Success Message",summary:'votre compte a bien été supprimé',duration:5000});
      }else{
        console.log('madaztch')
        this.toast.error({detail:"Success Message",summary:'error de la suppression',duration:5000});
      }
      },error=>{
        console.log(error);
      })
    }
  }
  }

