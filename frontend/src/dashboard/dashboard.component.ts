import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  NumberOfuser: any;
  taille: any;
  Participants:any
  constructor(public service:ServiceService) { }
   
   
  ngOnInit(): void {
    this.getUserByEtat_p()
  }
  public users:any[]=[]
  getUserByEtat_p(){
    this.service.search()
    .subscribe(data => {
      this.taille=data
      for (let i = 0; i <this.taille.length; i++ ) {
        
        this.users[i]=this.taille[i]
       
     }
      this.Participants=this.users.length
      //console.log(this.users.length)  
      },error=>{
        console.log(error);
      })
    
  }
}
