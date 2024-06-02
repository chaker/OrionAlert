import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../apiService.service';
import { NgFor } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { SignalRService } from '../signalRService.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {

  Alerts: any = [];

  constructor(private apiService: ApiServiceService, private SignalRService: SignalRService){}

  ngOnInit(): void {
    this.refreshLastAlerts();

    this.SignalRService.alerts$.subscribe(alerts => {
      console.log(`receive new alerts : ${alerts[alerts.length-1]}`);
      this.refreshLastAlerts();
    });
  }

  private refreshLastAlerts() {
    this.apiService.getLastAlerts().subscribe(data => {
      this.Alerts = data; // Ensure data is assigned correctly
      console.info('data received', data);
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
