import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Preplan } from './models/preplan.model';

@Injectable({
  providedIn: 'root'
})
export class PreplansService {

  public createEditVisible:boolean = false;

  private showCreateEditSource:Subject<void> = new Subject<void>();
  public toggleCreateEdit$ = this.showCreateEditSource.asObservable();

  public preplan: Preplan;
  public preplans = {};

  constructor() {
    this.loadPreplans();
  }

  private loadPreplans() {
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i).substring(0, 5) == 'preplan_') {
        let preplan = new Preplan().deserialize(localStorage.getItem(localStorage.key(i)));
        this.preplans[preplan.uuid] = preplan;
      }
    }
  }

  getPreplan(uuid) {
    return this.preplans[uuid];
  }

  savePreplan(preplan) {
    preplan.version = preplan.version + 1;
    preplan.updated = Date.now();

    if(!this.preplans[preplan.uuid]) {
      this.preplans[preplan.uuid] = preplan;
    }

    localStorage.setItem(`preplan_${preplan.uuid}`, JSON.stringify(preplan));
  }

  showCreateEdit(){
    this.createEditVisible = true;
    this.showCreateEditSource.next();
  }

  hideCreateEdit() {
    this.createEditVisible = false;
    this.showCreateEditSource.next();
  }
}
