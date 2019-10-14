import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreplansService {

  public createEditVisible:boolean = false;

  private showCreateEditSource:Subject<void> = new Subject<void>();
  public toggleCreateEdit$ = this.showCreateEditSource.asObservable();

  constructor() { }

  showCreateEdit(){
    this.createEditVisible = true;
    this.showCreateEditSource.next();
  }

  hideCreateEdit() {
    this.createEditVisible = false;
    this.showCreateEditSource.next();
  }
}
