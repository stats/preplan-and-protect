import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';
import { Subscription } from 'rxjs';

import swal from 'sweetalert2';

declare var $: any;

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

  viewPreplan(uuid) {

  }

  editPreplan(uuid) {

  }

  deletePreplan(uuid) {
    let preplan = this.preplans.preplans[uuid];
    swal.fire({
      title: `Delete ${preplan.name}?`,
      text: `You are about to delete ${preplan.name}? Are you sure?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText:' No, keep the preplan.'
    }).then((result) => {
      if(result.value) {
        this.preplans.deletePreplan(uuid);
      }
    });
  }

}
