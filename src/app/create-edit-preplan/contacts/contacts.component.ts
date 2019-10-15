import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

}
