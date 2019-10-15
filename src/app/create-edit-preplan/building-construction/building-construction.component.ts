import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-building-construction',
  templateUrl: './building-construction.component.html',
  styleUrls: ['./building-construction.component.scss']
})
export class BuildingConstructionComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

}
