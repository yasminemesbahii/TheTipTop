import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  N=0
    totalTicket:any
    DateSelected:any
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
  }
  lancerUnesession(){
    localStorage.setItem('counter1',this.N.toString());
    localStorage.setItem('counter2',this.N.toString());
    localStorage.setItem('counter3',this.N.toString());
    localStorage.setItem('counter4',this.N.toString());
    localStorage.setItem('counter5',this.N.toString());
    localStorage.setItem('counterTicket',this.N.toString());
    
   }
   fetchDateS(){
    console.log(this.DateSelected);
    localStorage.setItem('Date',this.DateSelected.toString());
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
