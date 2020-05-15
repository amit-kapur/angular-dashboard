import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions = {};

  Highcharts: typeof Highcharts = Highcharts;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random Data',
      },
      subtitle: {
        text: 'Demo',
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.dashboardService.bigCharts()
    };

    HC_exporting(Highcharts);

    //
    // Make charts responsive
    //
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
