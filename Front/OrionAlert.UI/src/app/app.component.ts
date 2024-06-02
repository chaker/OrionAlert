import { HttpClient } from '@microsoft/signalr';
import { AlertComponent } from './alert/alert.component';
import { ApiServiceService } from './apiService.service';
import { SignalRService } from './signalRService.service';

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrientAlert.UI';

  // constructor(private SignalRService: SignalRService){}

  // ngOnInit(): void {
  //   // this.SignalRService.alerts$.subscribe(alerts => {
  //   //   console.log(alerts);
  //   // });
  // }
}

