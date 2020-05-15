import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() data: any;

  bigChart = [];
  cards = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigCharts();
    this.cards = this.dashboardService.cards();
  }

}
