import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';
import { Hazard } from '../../models/hazard.model';

@Component({
  selector: 'app-hazards',
  templateUrl: './hazards.component.html',
  styleUrls: ['./hazards.component.scss']
})
export class HazardsComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

  addHazard() {
    this.preplans.current_preplan.hazards.push(new Hazard());
  }

}
