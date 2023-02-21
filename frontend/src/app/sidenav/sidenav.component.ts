import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {
  sideBarOpen = true;
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    this.getTickets_NU();
    this.getTickets_U();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  taille1:any
  Tickets1:any[]=[]
 
 getTickets_U(){
    this.service.AfficherTU()
    .subscribe(data => {

         this.taille1 =data;
      for (let i = 0; i <this.taille1.length ; i++ ) {
        
        this.Tickets1[i]=data[i]
        console.log(this.Tickets1)
     }
     
        
      },error=>{
        console.log(error);
      })
    
  }
  
  taille2:any
  Tickets2:any[]=[]
  getTickets_NU(){
    this.service.AfficherTNU()
    .subscribe(data => {

         this.taille2 =data;
      for (let i = 0; i <this.taille2.length ; i++ ) {
        
        this.Tickets2[i]=data[i]
        console.log(this.Tickets2)
     }
     
        
      },error=>{
        console.log(error);
      })
    
    }
  }
