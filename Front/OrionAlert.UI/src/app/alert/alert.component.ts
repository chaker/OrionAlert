import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../apiService.service';
import { NgFor } from '@angular/common';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {

  Alerts: any = [];

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.refreshLastAlerts();
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
