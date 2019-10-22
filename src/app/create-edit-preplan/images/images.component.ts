import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreplansService } from '../../preplans.service';
import { Image } from '../../models/image.model';
import DB from '../../mydatabase';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, AfterViewInit {

  constructor(public preplans:PreplansService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    for(let index in this.preplans.current_preplan.images) {
      let image = this.preplans.current_preplan.images[index];
      if(image && image.dexie_id) {
        $('#image_preview_' + index).attr('src', this.preplans.getImage(image.dexie_id));
      }
    }
  }

  addImage() {
    this.preplans.current_preplan.images.push(new Image());
  }

  async storeImage(index, img) {
    let imgCanvas = document.createElement("canvas");
    let imgContext = imgCanvas.getContext("2d");

    imgCanvas.width = img.width;
    imgCanvas.height = img.height;

    imgContext.drawImage(img, 0, 0, img.width, img.height);

    let data = imgCanvas.toDataURL("image/png", 0.5);

    var id = await DB.images.put({data: data});
    this.preplans.current_preplan.images[index].dexie_id = id;

    $('#image_preview_' + index).attr('src', data);
  }

  previewImage(event, index){
    let input = event.target;
    let img = document.createElement("img");
    if(input.files && input.files[0]){
      console.log('We have an image');
      let reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          this.storeImage(index, img);
        }
        img.src = reader.result as string;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

}
