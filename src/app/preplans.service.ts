import { Injectable } from '@angular/core';

import { Preplan } from './models/preplan.model';

import { cloneDeep } from 'lodash-es'
import { saveAs } from 'file-saver';

import DB from './mydatabase';

@Injectable({
  providedIn: 'root'
})
export class PreplansService {

  public current_preplan_uuid:string;
  public preplans = {};

  public image_cache = {};

  public homeVisible = true;
  public createEditVisible = false;
  public viewPreplanVisible = false;
  public preplanListVisible = false;
  public restoreVisible = false;

  private hideAll(){
    this.homeVisible = this.createEditVisible = this.viewPreplanVisible = this.preplanListVisible = this.restoreVisible = false;
  }

  showHome() {
    this.hideAll();
    this.homeVisible = true;
  }

  showCreateEdit() {
    this.hideAll();
    this.createEditVisible = true;
  }

  showViewPreplan() {
    this.hideAll();
    this.viewPreplanVisible = true;
  }

  showPreplanList() {
    this.hideAll();
    this.preplanListVisible = true;
  }

  showRestore() {
    this.hideAll();
    this.restoreVisible = true;
  }

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

  get preplansSize() {
    return Object.keys(this.preplans).length || 0;
  }

  setPreplan(uuid) {
    this.current_preplan_uuid = uuid;
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

    for(let image of preplan.images) {
      this.cache_image(image.dexie_id).then(result => {
        console.log('Cache Complete', result);
      });
    }

    this.setPreplan(preplan.uuid);

    localStorage.setItem(`preplan_${preplan.uuid}`, JSON.stringify(preplan));
  }

  deletePreplan(uuid) {
    let preplan = this.preplans[uuid];
    for(let image of preplan.images){
      DB.images.delete(image.dexie_id).then(result => {
        console.log('Image Delete');
      });
      delete this.image_cache[image.dexie_id];
    }
    delete this.preplans[uuid];
    localStorage.removeItem(`preplan_${uuid}`);
  }

  backupAll() {
    let preplans = cloneDeep(this.preplans);
    for(let key in preplans) {
      let preplan = preplans[key];
      for(let image of preplan.images){
        image["data"] = this.image_cache[image.dexie_id];
      }
    }
    var blob = new Blob([JSON.stringify(preplans)], {type : 'application/json'});
    saveAs(blob, "PreplanAndProtect_backup.json")
  }

  async restore(file) {
    let results:any = await this.open_restore_file(file);
    await DB.images.clear();
    localStorage.clear();

    for(let key in results) {
      let preplan_json = results[key];
      for(let image of preplan_json.images) {
        var id = await DB.images.put({data: image.data});
        image.dexie_id = id;
        delete image["data"];
      }
      localStorage.setItem(`preplan_${key}`, JSON.stringify(preplan_json));
    }

    this.loadPreplans();
  }

  async open_restore_file(file:File) {
    let reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing restore file."));
      }

      reader.onloadend = (e) => {
        resolve(JSON.parse(reader.result as string));
      }
      reader.readAsText(file);
    });
  }

}
