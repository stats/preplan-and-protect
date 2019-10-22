import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public preplans:PreplansService) { }

  ngOnInit() {
  }

}
