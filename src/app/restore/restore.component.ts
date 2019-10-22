import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

  public backupFile;

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

  restore() {
    swal.fire({
      title: `Restore data?`,
      text: `You are about to restore from backup. This will delete and replace all current data. Are you sure?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, restore!',
      cancelButtonText:' No, not now.'
    }).then((result) => {
      if(result.value) {
        /** Maybe show a spinner here **/
        this.preplans.restore((<HTMLInputElement>$('#backup_file')[0]).files[0]).then((result) => {
          console.log('Restore complete');
        });
      }
    });
  }

}
