import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';
import { Contact } from '../../models/contact.model';
import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

  addContact() {
    this.preplans.current_preplan.contacts.push(new Contact());
  }

  addPhone(index) {
    this.preplans.current_preplan.contacts[index].phones.push(new Phone());
  }

}
