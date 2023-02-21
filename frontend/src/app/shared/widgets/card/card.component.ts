import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ApiAppService } from 'src/app/Service/api-app.service';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  
  data1:string=localStorage.getItem('counter1').toString();
  data2:string=localStorage.getItem('counter2').toString();
  data3:string=localStorage.getItem('counter3').toString();
  data4:string=localStorage.getItem('counter4').toString();
  data5:string=localStorage.getItem('counter5').toString();
  //tab:any[]=[parseInt(this.data1),parseInt(this.data2),parseInt(this.data3),parseInt(this.data3),parseInt(this.data4)]
  
  
  Highcharts = Highcharts;
  chartOptions:{};
  constructor(public apiService:ApiAppService) { }

  ngOnInit(): void {
   
   

    console.log(this.data1.toString())
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['Infuseur à thé', 'Thé detox ou infusion', 'Thé signature', 'Coffret 39$', 'Coffret 69$']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Lots: {point.y}'
    },
    title: {
        text: 'Données pour les gains obtenues'
    },
    subtitle: {
        text:''
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [parseInt(this.data1),parseInt(this.data2),parseInt(this.data3),parseInt(this.data4),parseInt(this.data5)],
        colorByPoint: true
    }]
}
  
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
