import { Component, OnInit } from '@angular/core';
import { ApiAppService } from 'src/app/Service/api-app.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.less']
})
export class DashbordComponent implements OnInit {

  constructor(public apiService:ApiAppService) { }
  
  
  ngOnInit(): void {
    
    this.getUsers()
    this.getUserByEtat_p()
  }
 public usersNop:any[]=[]
  getUserByEtat_p(){
    let length;
    this.apiService.search()
    .subscribe(data => {
      this.taille =data;
     
      for (let i = 0; i <this.taille.length ; i++ ) {
        
        this.usersNop[i]=data
     }
     
     
     length=this.usersNop.length;
     localStorage.setItem('NombreUserNop',length);
      },error=>{
        console.log(error);
      })
    
  }
  public users:any[]=[]
  public taille
  getUsers(){
    let length
    this.apiService.getPrixBy__v()
    .subscribe((data):any => {
        this.users=data["result"]
     this.users.length
     length=this.users.length;
     localStorage.setItem('TotalUser',length)
      },error=>{
        console.log(error);
      })
    
  }
}
