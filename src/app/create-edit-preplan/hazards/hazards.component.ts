import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-hazards',
  templateUrl: './hazards.component.html',
  styleUrls: ['./hazards.component.scss']
})
export class HazardsComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

}
