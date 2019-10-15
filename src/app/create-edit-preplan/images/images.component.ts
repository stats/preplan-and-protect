import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

}
