import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CreateEditPreplanComponent } from './create-edit-preplan/create-edit-preplan.component';
import { GeneralInformationComponent } from './create-edit-preplan/general-information/general-information.component';
import { SectionContentDirective } from './section-content.directive';
import { RiskRatingComponent } from './create-edit-preplan/risk-rating/risk-rating.component';
import { ContactsComponent } from './create-edit-preplan/contacts/contacts.component';
import { BuildingConstructionComponent } from './create-edit-preplan/building-construction/building-construction.component';
import { FireFlowComponent } from './create-edit-preplan/fire-flow/fire-flow.component';
import { HazardsComponent } from './create-edit-preplan/hazards/hazards.component';
import { ImagesComponent } from './create-edit-preplan/images/images.component';
import { ViewPreplanComponent } from './view-preplan/view-preplan.component';
import { PreplanListComponent } from './preplan-list/preplan-list.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { RestoreComponent } from './restore/restore.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    CreateEditPreplanComponent,
    GeneralInformationComponent,
    SectionContentDirective,
    RiskRatingComponent,
    ContactsComponent,
    BuildingConstructionComponent,
    FireFlowComponent,
    HazardsComponent,
    ImagesComponent,
    ViewPreplanComponent,
    PreplanListComponent,
    SafeHtmlPipe,
    RestoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GeneralInformationComponent,
    RiskRatingComponent,
    ContactsComponent,
    BuildingConstructionComponent,
    FireFlowComponent,
    HazardsComponent,
    ImagesComponent
  ]
})
export class AppModule { }
