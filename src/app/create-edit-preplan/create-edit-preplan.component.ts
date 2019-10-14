import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PreplansService } from '../preplans.service';
import { Subscription } from 'rxjs';

import { SectionContentDirective } from '../section-content.directive';

import { GeneralInformationComponent } from './general-information/general-information.component';
import { RiskRatingComponent } from './risk-rating/risk-rating.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BuildingConstructionComponent } from './building-construction/building-construction.component';
import { FireFlowComponent } from './fire-flow/fire-flow.component';
import { HazardsComponent } from './hazards/hazards.component';
import { ImagesComponent } from './images/images.component';

declare var $: any;

@Component({
  selector: 'app-create-edit-preplan',
  templateUrl: './create-edit-preplan.component.html',
  styleUrls: ['./create-edit-preplan.component.scss']
})
export class CreateEditPreplanComponent implements OnInit {

  private showModalRef:Subscription = null;

  private steps:any[] = [
    {title: 'General Information', content: GeneralInformationComponent},
    {title: 'Risk Rating', content: RiskRatingComponent},
    {title: 'Contacts', content: ContactsComponent},
    {title: 'Building Construction', content: BuildingConstructionComponent},
    {title: 'Fire Flow', content: FireFlowComponent},
    {title: 'Hazards', content: HazardsComponent},
    {title: 'Images', content: ImagesComponent}
  ];

  private current_step = 0;

  public section_title;

  @ViewChild(SectionContentDirective, {static: true}) sectionContent:SectionContentDirective;

  constructor(private preplans:PreplansService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.showModalRef = this.preplans.toggleCreateEdit$.subscribe(() => {
      if(this.preplans.createEditVisible) {
        $('#create-edit-preplan').modal('show');
      } else {
        $('#create-edit-preplan').modal('hide');
      }
    })

    this.loadComponent();

  }

  private loadComponent(){
    const component = this.steps[this.current_step];
    this.section_title = component.title;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.content);

    const viewContainerRef = this.sectionContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  private next() {
    this.current_step++;
    this.loadComponent();
  }

  private back() {
    this.current_step--;
    this.loadComponent();
  }

  private viewReport() {

  }

}
