/**
 * Created by shidokht on 2017-07-24.
 */
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {OfferService} from "./OfferService.service";
import {IOffer} from "./Offer.model";

@Component({
  selector: 'newOffer',
  template: `    
    <modal #newOfferModal>
      <form #modalForm="ngForm">
          <modal-header>
            <button class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Offer</h4>
          </modal-header>
          <modal-body>
            <div class="form-group">
              
                <label for="name" >First name</label>
                <input type="text" class="form-control" required name="name" (ngModel)="newOffer.name"/>
              </div>
              <div class="form-group">
                <label for="family" >Last name</label>
                <input type="text" class="form-control" required name="family" (ngModel)="newOffer.family"/>
              </div>
            <div class="form-group">
                  <label for="email" >Email</label>
                  <input type="email" class="form-control" required name="email" (ngModel)="newOffer.email"/>
            </div>
            <div class="form-group">
              <label for="phone" >Phone</label>
              <input type="text" class="form-control" name="phone" (ngModel)="newOffer.phone"/>
            </div>
            <div class="form-group">
              <label for="offerPrice" >Price</label>
              <input type="number" class="form-control" required name="offerPrice" (ngModel)="newOffer.offerPrice"/>
            </div>
            <div class="form-group">
              <label for="offerExtraInfo" >Additional information</label>
              <input type="text" class="form-control" name="offerExtraInfo" (ngModel)="newOffer.offerExtraInfo"/>
            </div>
 
          </modal-body>
          <modal-footer>
            <button type="button" (click)="saveOffer(modalForm.value)" class="btn btn-primary">Add offer</button>

            <button type="button" class="btn btn-primary" (click)="newOfferModal.dismiss()" (onDismiss)="offerClosed()">Cancel</button>
          </modal-footer>
      </form>
    </modal>
  `

})

export class NewOfferModal implements OnInit{
  @ViewChild('newOfferModal') modal: ModalComponent;
  @Input() sellingOfferId
  @Output() offerClosedEvent =  new EventEmitter()
  newOffer:IOffer
  constructor(private offerService:OfferService){}

  ngOnInit(){
    this.modal.open();
}

  saveOffer(formValue:IOffer) {
    this.newOffer = formValue;
    this.newOffer.offerId = this.sellingOfferId
    this.offerService.addOffer(this.newOffer)
    this.modal.close()
    this.offerClosed()

  }
  offerClosed(){
    this.offerClosedEvent.emit()
  }
}
