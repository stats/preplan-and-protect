import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preplan-list',
  templateUrl: './preplan-list.component.html',
  styleUrls: ['./preplan-list.component.scss']
})
export class PreplanListComponent implements OnInit {

  private showModalRef:Subscription = null;

  constructor(private preplans:PreplansService) {
  }

  ngOnInit() {
    this.showModalRef = this.preplans.togglePreplanList$.subscribe(() => {
      if(this.preplans.preplanListVisible) {
        $('#preplans-list').modal('show');
      } else {
        $('#preplans-list').modal('hide');
      }
    })
  }

}
