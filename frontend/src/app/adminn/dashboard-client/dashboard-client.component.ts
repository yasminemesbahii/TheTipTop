import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.less']
})
export class DashboardClientComponent implements OnInit {
  UserId:any = localStorage.getItem('idUser');
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    this.getLots()
  }
  public Lots:any[]=[]
    public taille;
    sideBarOpen=true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
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
}
