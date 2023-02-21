//import { style } from '@angular/animations';
//import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { NgxWheelComponent, TextOrientation, TextAlignment  } from 'projects/ngx-wheel/src/public-api';
import { ServiceService } from 'src/service/service.service';
import moment from 'moment';
import swal from "sweetalert2";
@Component({
  selector: 'app-roue',
  templateUrl: './roue.component.html',
  styleUrls: ['./roue.component.less'],
})
export class RoueComponent implements OnInit {

  constructor(private route:Router,public service:ServiceService){}
  @ViewChild(NgxWheelComponent, { static: false }) wheel:any;
  max=70;
  min=10;
  totalticket:any = localStorage.getItem('NombreTickets');
  seed:any = [...Array(5).keys()];
  idToLandOn: any;
  conteur1:any = localStorage.getItem('counter1');
  conteur2:any = localStorage.getItem('counter2');
  conteur3:any = localStorage.getItem('counter3');
  conteur4:any = localStorage.getItem('counter4');
  conteur5:any = localStorage.getItem('counter5');

  public Gain:any = localStorage.getItem('Gain');
  conteurTicket:any = localStorage.getItem('counterTicket');
  items: any[];
  Date:any=localStorage.getItem('Date')
  given = moment(this.Date, "YYYY-MM-DD");
  current = moment().startOf('day');
  iswheelcompleted: boolean = false;
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  delay:any;
  public iscompleted1: boolean = false;
  public iscompleted2: boolean = false;
  public iscompleted3: boolean = false;
  public iscompleted4: boolean = false;
  public iscompleted5: boolean = false;
   //res:any=(this.totalticket/100)*60;
    // Add this ⤵️
    
  ngOnInit(){
    //this.price=Math.round(Math.random() * (this.max - this.min) + this.min);
    //this.getPrix()
    this.delay=  moment.duration(this.given.diff(this.current)).asDays();
    console.log(this.delay);
    //this.service.loading()
    //console.log(this.users)
    //console.log()
    this.idToLandOn = this.seed[Math.round(Math.random() * this.seed.length)];
    const colors = ['#4c7faf', '#FF0000','#FF8C00','#9932CC','#00FF00']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 5],
      text: `Gain ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  calculep(p:any){
    if(p==60){
     return (this.totalticket/100)*p;
    }else
    if(p==20){
      return (this.totalticket/100)*p;
    }
    else
    if(p==10){
     return  (this.totalticket/100)*p;
    }
    else
    if(p==6){
      return (this.totalticket/100)*p;
    }
    else
    if(p==4){
      return  (this.totalticket/100)*p;
    }
    else{
      alert('error');
    }

  }
  reset() {

    this.wheel.reset();
    location.reload();
    
    //this.load1();
   // this.load2();
    
  }
 /* before() {
    if(this.conteur1<this.calculep(60)){
    alert(`Ta roue est sur le point de tourner`)

    //console.log(this.res)
    }else 
    if(this.conteur2<this.calculep(20)){
      alert(`Ta roue est sur le point de tourner`)
      //console.log(this.res)
    }
    else if(this.conteur3<this.calculep(10)){
      alert(`Ta roue est sur le point de tourner`)
      //console.log(this.res)
    }
    else if(this.conteur4<this.calculep(6)){
      alert(`Ta roue est sur le point de tourner`)
      //console.log(this.res)
    }
    else if(this.conteur5<this.calculep(4)){
      alert(`Ta roue est sur le point de tourner`)
      //console.log(this.res)
    }
    else{
      alert(`s'il vous plais rejouer`)
     // console.log(this.totalticket)
    }
  }*/
 

  async spin() {
   if(this.totalticket!=this.conteurTicket && this.delay>0){
      if(this.conteur1<this.calculep(60) && this.idToLandOn==0){
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin(this.idToLandOn);
      }else if(this.conteur2<this.calculep(20) && this.idToLandOn==1){
        await new Promise(resolve => setTimeout(resolve, 0));
        this.wheel.spin(this.idToLandOn);
          }
          else if(this.conteur3<this.calculep(10) && this.idToLandOn==2){
            await new Promise(resolve => setTimeout(resolve, 0));
            this.wheel.spin(this.idToLandOn);
              }
              else
              if(this.conteur4<this.calculep(6) && this.idToLandOn==3){
                await new Promise(resolve => setTimeout(resolve, 0));
                this.wheel.spin(this.idToLandOn);
                  }
                  else
                  if(this.conteur5<this.calculep(4) && this.idToLandOn==4){
                    await new Promise(resolve => setTimeout(resolve, 0));
                    this.wheel.spin(this.idToLandOn);
                      }
                      else{
                       
                            alert('ce gain est remporté deja Rejouez à nouveau!')
                             location.reload();
                            //this.conteur1=0
                            // this.conteur2=0
                            //this.conteur3=0
                            //this.conteur4=0
                            //this.conteur5=0
                      }

  }else{
    alert('Session Terminer!');
  }
    }
    redirecttoaction(){
      this.route.navigateByUrl('celebration',{skipLocationChange:false});
    }
    save1(){
      localStorage.setItem('counter1',this.conteur1.toString());
    }
   
    save2(){
      localStorage.setItem('counter2',this.conteur2.toString());
    }
    save3(){
    localStorage.setItem('counter3',this.conteur3.toString());
    }
    save4(){
      localStorage.setItem('counter4',this.conteur4.toString());
    }
    save5(){
      localStorage.setItem('counter5',this.conteur5.toString());
    }
    svaeGain(){
      localStorage.setItem('Gain',this.Gain.toString());
    }
    saveTicketCounter(){
      localStorage.setItem('counterTicket',this.conteurTicket.toString());
    }
    after() {
     // this.service.iscompleted=true;
      if(this.idToLandOn==0){
      this.service.iscompleted1=true;
      //alert('vous avez gagné un infuseur à thé')
      
      this.Gain='un infuseur à thé';
      this.svaeGain();
      this.conteur1++
      this.conteurTicket++
        this.save1();
        this.saveTicketCounter();
     // this.conteur1++;
    // console.log(this.conteur1);
    swal.fire('Félicitation','vous avez gagné un infuseur à thé','info').then(v=>{
      if(v.value){
        this.redirecttoaction();
      }
    })
     
      }
      
      else
     // this.service.iscompleted=true
      if(this.idToLandOn==1){
        this.service.iscompleted2=true;
        //alert('vous avez gagné une boite de 100g dun thé détox ou dinfusion')
        
        this.Gain='une boite de 100g dun thé détox ou dinfusion';
        this.svaeGain();
        this.conteur2++
        this.conteurTicket++
        this.save2();
        this.saveTicketCounter();
        swal.fire('Félicitation','vous avez gagné une boite de 100g dun thé détox ou dinfusion','info').then(v=>{
          if(v.value){
            this.redirecttoaction();
          }
        })
       
      // console.log(this.conteur2 );
      }
      else
     // this.service.iscompleted=true
      if(this.idToLandOn==2){
        this.service.iscompleted3=true;
        //alert('vous avez gagné une boite de 100g dun thé signature')
      
        this.Gain='une boite de 100g dun thé signature';
        this.svaeGain();
        this.conteur3++
        this.conteurTicket++
        this.save3();
        this.saveTicketCounter();
      //  this.save();
       // console.log(this.conteur3);
       swal.fire('Félicitation','vous avez gagné une boite de 100g dun thé signature','info').then(v=>{
        if(v.value){
          this.redirecttoaction();
        }
       })
      
      }
      else
      //this.service.iscompleted=true
      if(this.idToLandOn==3){
        this.service.iscompleted4=true;
        //alert('vous avez gagné un coffret découverte dune valeur de 39$')
       
        this.Gain='un coffret découverte dune valeur de 39$';
        this.svaeGain();
        this.conteur4++
        this.conteurTicket++
        this.save4();
        this.saveTicketCounter();
       // this.save();
        //console.log(this.conteur4);
        swal.fire('Félicitation','vous avez gagné un coffret découverte dune valeur de 39$','info').then(v=>{
          if(v.value){
            this.redirecttoaction();
          }
        })
      
      }
      else
      //this.service.iscompleted=true
      if(this.idToLandOn==4){
        this.service.iscompleted5=true;
        //alert('vous avez gagné un coffret découverte dune valeur de 69$')
       
        this.Gain='un coffret découverte dune valeur de 69$';
        this.svaeGain();
       // this.save();
       this.conteurTicket++
       this.conteur5++
        this.save5();
        this.saveTicketCounter();
       // console.log(this.conteur5);
       swal.fire('Félicitation','vous avez gagné un coffret découverte dune valeur de 69$','info').then(v=>{
        if(v.value){
        this.redirecttoaction();
        }
       })
       
      }
    
      //this.iswheelcompleted=true;
    }
    /*public prix;
    getPrix(){
      this.service.getPrixBy__v('635e76adf4645d9f6e6a91da')
      .subscribe(data => {
           this.prix=data["doc"]["tickets"]["Prix"]
           console.log(this.prix)
        },error=>{
          console.log(error);
        })
      
    }*/
  }
  



