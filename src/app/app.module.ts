import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { AppComponent } from './app.component';
import {OfferComponent} from './Property/Offer.component'
import {OfferService} from './Property/OfferService.service'
import {EstateListComponent}  from './Property/Estate-list.component'
import {EstateService}  from './Property/Estate.service'
import {EstateDetails} from './Property/Estate-details.component'
import {NewOfferModal} from './Property/New-offer-modal.component'
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {CreateEstateComponent} from './Property/Create-estate.component'

@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    AppComponent,
    OfferComponent,
    EstateListComponent,
    EstateDetails,
    NewOfferModal,
    CreateEstateComponent
  ],
  providers: [
    // {provide: JQ_TOKEN, useValue:jQuery},
    OfferService,
    EstateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
