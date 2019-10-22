import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-risk-rating',
  templateUrl: './risk-rating.component.html',
  styleUrls: ['./risk-rating.component.scss']
})
export class RiskRatingComponent implements OnInit {

  constructor(public preplans:PreplansService) { }

  ngOnInit() {
  }

}
