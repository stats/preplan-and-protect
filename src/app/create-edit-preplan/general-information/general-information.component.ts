import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  constructor(public preplans:PreplansService) { }

  ngOnInit() {
  }

  addAlias() {
    this.preplans.current_preplan.aliases.push("");
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
