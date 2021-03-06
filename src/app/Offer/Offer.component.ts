/**
 * Created by shidokht on 2017-07-23.
 */
import {Component} from "@angular/core";
import {OfferService} from "./OfferService.service";
import {IOffer} from "./Offer.model";
@Component({
  templateUrl: './Offer.component.html',
  styles:[`
		body{
		margin: 0;
		padding: 0;
		font-size: 14px;
	}
	form{
	
		width:80%;
		text-align: center;
		margin: 0 auto;
		margin-top: 30px;
		
		}
		div:first-child{
			background-color: lightgrey;
		height: 80px;
		width: 100%;
			position: relative;
			margin-bottom: 50px;
			
		}
		label{
			position: absolute;
			top: 10px;
			left: 100px;
			width: 130px;
			}
		#offerId{
			position: absolute;
			top: 10px;
			left: 250px;
			width: 180px;
			
		}
		div:first-child button{
			position: absolute;
			top: 10px;
			left: 500px;
		}
		
	button{
		background-color: rgb(0,128,128);
		color:white;
		width: 120px;
		height: 40px;
		border : 1px solid white;
		border-radius: 5px;
		}	
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
