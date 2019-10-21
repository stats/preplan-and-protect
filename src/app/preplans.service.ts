import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Preplan } from './models/preplan.model';

import DB from './mydatabase';

@Injectable({
  providedIn: 'root'
})
export class PreplansService {

  public createEditVisible:boolean = false;
  public preplanListVisible:boolean = false;

  private showCreateEditSource:Subject<void> = new Subject<void>();
  public toggleCreateEdit$ = this.showCreateEditSource.asObservable();

  private showPreplanListSource:Subject<void> = new Subject<void>();
  public togglePreplanList$ = this.showPreplanListSource.asObservable();

  public current_preplan_uuid:string;
  public preplans = {};

  public image_cache = {};

  public get current_preplan() {
    return this.preplans[this.current_preplan_uuid];
  }

  constructor() {
    this.loadPreplans();
  }

  private loadPreplans() {
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i).substring(0, 8) == 'preplan_') {
        let preplan = new Preplan().deserialize(JSON.parse(localStorage.getItem(localStorage.key(i))));
        this.preplans[preplan.uuid] = preplan;
        for(let image of preplan.images) {
          this.cache_image(image.dexie_id).then(result => {
            console.log('Cache Complete', result);
          });
        }
      }
    }
  }

  async cache_image(id) {
    let image = await DB.images.get(id);
    this.image_cache[id] = image.data;
    return id;
  }

  getImage(id) {
    return this.image_cache[id];
  }


  // async getImage(id) {
  //   if(this.image_cache[id]) return this.image_cache[id];
  //   console.log(id, this.image_cache[id]);
  //   let image = await DB.images.get(id)
  //   this.image_cache[id] = image.data;
  //   return this.image_cache[id];
  // }

  get preplansSize() {
    return Object.keys(this.preplans).length || 0;
  }

  setPreplan(uuid) {
    this.current_preplan_uuid = uuid;
    console.log(this.current_preplan);
  }

  getPreplan(uuid) {
    return this.preplans[uuid];
  }

  newPreplan() {
    let preplan = new Preplan();
    this.preplans[preplan.uuid] = preplan;
    this.current_preplan_uuid = preplan.uuid;
    return this.preplans[preplan.uuid];
  }

  savePreplan() {
    let preplan = this.preplans[this.current_preplan_uuid];
    preplan.version = preplan.version + 1;
    preplan.updated = Date.now();

    if(!this.preplans[preplan.uuid]) {
      this.preplans[preplan.uuid] = preplan;
    }

    localStorage.setItem(`preplan_${preplan.uuid}`, JSON.stringify(preplan));
  }

  deletePreplan(uuid) {
    delete this.preplans[uuid];
    localStorage.removeItem(`preplan_${uuid}`);
  }

  showCreateEdit(){
    this.createEditVisible = true;
    this.showCreateEditSource.next();
  }

  hideCreateEdit() {
    this.createEditVisible = false;
    this.showCreateEditSource.next();
  }

  showPreplansList() {
    this.preplanListVisible = true;
    this.showPreplanListSource.next();
  }

  hidePreplansList() {
    this.preplanListVisible = false;
    this.showPreplanListSource.next();
  }

}
