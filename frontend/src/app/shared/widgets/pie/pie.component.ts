import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions:{};
  constructor() { }
  TotalUser:any = localStorage.getItem('TotalUser');
  NombreTickets:any = localStorage.getItem('NombreTickets');
  NombreUserNop:any = localStorage.getItem('NombreUserNop');
  NombreUserP:any = localStorage.getItem('NombreUserP');
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Statistiques Générales'
      },
      subtitle: {
          text: ''
              
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
        name: 'Statistiques',
        colorByPoint: true,
        data: [{
            name: 'Totale_Tickets',
            y: parseInt(this.NombreTickets),
            sliced: true,
            selected: true
        }, {
            name: 'Toatle_Utilisatuers',
            y: parseInt(this.TotalUser)
        },  {
            name: 'Utilisateurs_P',
            y: parseInt(this.NombreUserP)
        }, {
            name: 'Utilisateurs_Non_P',
            y: parseInt(this.NombreUserNop)
        }, {
       
        }]
    }]
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
}
}