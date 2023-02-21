import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.less']
})
export class EmployerComponent implements OnInit {
  filterTerm!: string;
  constructor(public service:ServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.getUserByEtat_p()
    
  }
  sideBarOpen=true
  
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  addEtat_obtention(uid:any) {
    this.service.update_etatObtention(uid)
      .subscribe(data => {
        console.log(data)
          this.toast.success({detail:"Success Message",summary:'Gain Recu',duration:5000})
      })  
      
  }
  public users:any[]=[];
  taille:any
  getUserByEtat_p(){
    this.service.search()
    .subscribe(data => {

         this.taille =data;
     
      for (let i = 0; i <this.taille.length ; i++ ) {
        
        this.users[i]=data[i]
     }
     
        
      },error=>{
        console.log(error);
      })
    
  }
}


