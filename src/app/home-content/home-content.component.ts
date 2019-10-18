import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  constructor(public preplans:PreplansService) { }

  ngOnInit() {
  }

  public createPreplan(){
    this.preplans.newPreplan();
    this.preplans.showCreateEdit();
  }

}
