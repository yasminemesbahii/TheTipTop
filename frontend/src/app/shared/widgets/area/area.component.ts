import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {
  chartOptions:{};
  @Input() data: any = [];

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      accessibility: {
        enabled: false
      },
      series: [{
        name: 'the tip top lille',
        data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
    }, {
        name: 'the tip top paris',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

    }, {
        name: 'the tip top nice',
        data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
    }, {
        name: 'the tip top nantes',
        data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

    }, {
        name: 'the tip top metz',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
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
