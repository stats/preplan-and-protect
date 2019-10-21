import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';

@Component({
  selector: 'app-view-preplan',
  templateUrl: './view-preplan.component.html',
  styleUrls: ['./view-preplan.component.scss']
})
export class ViewPreplanComponent implements OnInit {

  preplan:any;

  constructor(private preplans:PreplansService) {
    this.preplan = this.preplans.current_preplan;

    this.preplans.preplanChange$.subscribe(() => {
      this.preplan = this.preplans.current_preplan;
    })
  }

  ngOnInit() {
  }

}
