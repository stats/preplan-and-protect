import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';

@Component({
  selector: 'app-view-preplan',
  templateUrl: './view-preplan.component.html',
  styleUrls: ['./view-preplan.component.scss']
})
export class ViewPreplanComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

}
