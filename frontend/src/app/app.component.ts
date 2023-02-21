import { Component, ViewChild } from '@angular/core';
import {Router} from "@angular/router"
import { NgxWheelComponent, TextOrientation, TextAlignment  } from 'projects/ngx-wheel/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private route:Router){}
  @ViewChild(NgxWheelComponent, { static: false }) wheel:any;
  max=70;
  min=10;
  totalticket = 50;
  seed:any = [...Array(5).keys()];
  idToLandOn: any;
  conteur1:any = localStorage.getItem('counter1');
  conteur2:any = localStorage.getItem('counter2');
  conteur3:any = localStorage.getItem('counter3');
  conteur4:any = localStorage.getItem('counter4');
  conteur5:any = localStorage.getItem('counter5');
  items: any[];
  iswheelcompleted: boolean = false;
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
   price:any;
   //res:any=(this.totalticket/100)*60;
  ngOnInit(){
    this.price=Math.round(Math.random() * (this.max - this.min) + this.min);
    this.idToLandOn = this.seed[Math.round(Math.random() * this.seed.length)];
    const colors = ['#4c7faf', '#FF0000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
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
  before() {
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
  }
 

  async spin() {
    if(this.price>=49){
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
      alert('votre budget est insuffisant il faut depasser 49 euro pour jouer')
      location.reload();
    }
    }
    redirecttoaction(){
      this.route.navigateByUrl('celebration',{skipLocationChange:true});
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
    after() {
     
      if(this.idToLandOn==0){
      alert('vous avez gagné un infuseur à thé')
      this.conteur1++
        this.save1();
     // this.conteur1++;
    // console.log(this.conteur1);
     this.redirecttoaction();
      }
      
      else
      if(this.idToLandOn==1){
        alert('vous avez gagné une boite de 100g dun thé détox ou dinfusion')
        this.conteur2++
        this.save2();
       this.redirecttoaction();
      // console.log(this.conteur2 );
      }
      else
      if(this.idToLandOn==2){
        alert('vous avez gagné une boite de 100g dun thé signature')
        this.conteur3++
        this.save3();
      //  this.save();
       // console.log(this.conteur3);
       this.redirecttoaction();
      }
      else
      if(this.idToLandOn==3){
        alert('vous avez gagné un offret découverte dune valeur de 39$')
        this.conteur4++
        this.save4();
       // this.save();
        //console.log(this.conteur4);
       this.redirecttoaction();
      }
      else
      if(this.idToLandOn==4){
        alert('vous avez gagné un offret découverte dune valeur de 69$')
       // this.save();
       this.conteur5++
        this.save5();
       // console.log(this.conteur5);
       
       this.redirecttoaction();
      }
    
      //this.iswheelcompleted=true;
    }
    
  }

  

