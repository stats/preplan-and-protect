import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';
import { FireFlow } from '../../models/fireflow.model';

@Component({
  selector: 'app-fire-flow',
  templateUrl: './fire-flow.component.html',
  styleUrls: ['./fire-flow.component.scss']
})
export class FireFlowComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

  addFireflow() {
    this.preplans.current_preplan.fireflows.push(new FireFlow());
  }

}
