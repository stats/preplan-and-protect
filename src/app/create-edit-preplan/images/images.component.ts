import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private preplans:PreplansService) { }

  ngOnInit() {
  }

  addImage() {
    this.preplans.current_preplan.images.push(new Image());
  }

  storeImage(index, img) {
    let imgCanvas = document.createElement("canvas");
    let imgContext = imgCanvas.getContext("2d");

    console.log(img, img.width, img.height);

    imgCanvas.width = (img.width);
    imgCanvas.height = (img.height);

    imgContext.drawImage(img, 0, 0, img.width, img.heigh);

    this.preplans.current_preplan.images[index].data = imgCanvas.toDataURL("image/png");
  }

  previewImage(event, index){
    let input = event.target;
    let img = document.createElement("img");
    if(input.files && input.files[0]){
      console.log('We have an image');
      let reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        this.storeImage(index, img);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

}
