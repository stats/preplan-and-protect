import { Component } from '@angular/core';
import { PreplansService } from './preplans.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preplan-and-protect';

  constructor(private preplans:PreplansService){

  }
}
