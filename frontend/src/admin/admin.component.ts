import { Component, OnInit, Sanitizer } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})

export class AdminComponent implements OnInit {
    N=0
    totalTicket:any
    DateSelected:any
    public descriptionIndex: number;
    public descriptions: string[];
    public sprintName: string;
    public thingIndex: number;
    public things: string[]
  constructor(public service:ServiceService) { }
  
  
  ngOnInit(): void {
    this.getUserByEtat_p()
   
  }
   lancerUnesession(){
    localStorage.setItem('counter1',this.N.toString());
    localStorage.setItem('counter2',this.N.toString());
    localStorage.setItem('counter3',this.N.toString());
    localStorage.setItem('counter4',this.N.toString());
    localStorage.setItem('counter5',this.N.toString());
    localStorage.setItem('counterTicket',this.N.toString());
    
   }
   getName(){
    
    var randomName=this.Nom[Math.floor(Math.random() * this.Nom.length)]
    return randomName;
   }
  
    
    nameQty(){
     document.querySelector('.nameList').innerHTML ='le gagnant d`un an de thé d`une valeur de 360$ C`est :' + this.getName();
    
   }
   fetchDateS(){
    console.log(this.DateSelected);
    localStorage.setItem('Date',this.DateSelected.toString());
   }
  
   public Nom:any[]=[]
   public Prenom:any[]=[];
   public taille;
  getUserByEtat_p(){
    let lenght;
    this.service.search()
    .subscribe(data => {
      this.taille =data;
     
      for (let i = 0; i <this.taille.length ; i++ ) {
        
        this.Nom[i]=data[i]["nom"]
     }
     
     console.log(this.Nom)
     lenght=this.Nom.length;
     localStorage.setItem('NombreUserP',lenght);
      },error=>{
        console.log(error);
      })
    
  }
  addTotalTicket() {
    this.service.addtotaltciket(this.totalTicket)
      .subscribe(data => {
        alert('les tickets à bien creer')
        console.log(data)
        localStorage.setItem('NombreTickets',this.totalTicket);
      })  
      
  }

}
