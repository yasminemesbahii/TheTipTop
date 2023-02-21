import { Component, OnInit} from '@angular/core';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-cele',
  templateUrl: './cele.component.html',
  styleUrls: ['./cele.component.less']
})
export class CeleComponent implements OnInit   {
  
  //public iscompleted: boolean = false;
  constructor(public service:ServiceService) {
    
  }
  sideBarOpen=true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
  Refp:any=localStorage.getItem('Refp');
  UserId:any = localStorage.getItem('idUser');
  NomUser:any = localStorage.getItem('nomUser');
  iscompleted1=this.service.iscompleted1;
  iscompleted2=this.service.iscompleted2;
  iscompleted3=this.service.iscompleted3;
  iscompleted4=this.service.iscompleted4;
  iscompleted5=this.service.iscompleted5;
    
  Gain:any = localStorage.getItem('Gain');
  ngOnInit(): void {
    this.addGainbyUser();
    this.addEtat_P();
    this.addEtat_utiliseT();
  }
  addGainbyUser() {
    this.service.postGain(this.UserId,this.NomUser,this.Gain)
      .subscribe(data => {
        console.log(data)
      })      
  }
  addEtat_P() {
    this.service.postEtat_P(this.UserId)
      .subscribe(data => {
        console.log(data)
      })      
  }
  addEtat_utiliseT() {
    this.service.update_etatUtilastionTicket(this.Refp)
      .subscribe(data => {
        console.log(data)
      })      
  }
}
