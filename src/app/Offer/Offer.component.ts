/**
 * Created by shidokht on 2017-07-23.
 */
import {Component} from "@angular/core";
import {OfferService} from "./OfferService.service";
import {IOffer} from "./Offer.model";
@Component({
  templateUrl: './Offer.component.html',
  styles:[`

  `
  ]
})
export class OfferComponent {

  offer:IOffer
  constructor(private offerService:OfferService){}
  findOffer(formValue){


    this.offerService.getOffer(formValue.offerId).subscribe(resp=>{
      this.offer = resp[0]
    })
  }
  acceptOffer(id:number){

    //TODO
    // this.offerService.acceptOffer(id).subscribe({
    //   resp=>{
    //
    // }
    // })
  }
}
