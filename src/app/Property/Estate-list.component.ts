/**
 * Created by shidokht on 2017-07-24.
 */
import {Component, Inject, OnInit, Output} from "@angular/core";
import {EstateService} from "./Estate.service";
import {IEstate, IEstateDetail} from "./Estate.model";


@Component({
  templateUrl: './Estate-list.component.html'
})
export class EstateListComponent implements OnInit{

  properties:IEstate[]
  details:IEstateDetail
  spannedProperties = []
  sellingOfferId:number
  addOfferActivated:boolean =false


  constructor(private estateService:EstateService){}
  ngOnInit(){

    this.estateService.getAll().subscribe(resp => {
      this.properties = resp

    })

  }
  toggleDetail(id:number, event){

    this.estateService.getEstateDetails(id).subscribe(resp => {
      this.details = resp
    })

    if(event.srcElement.value === "Show Details") {
      this.spannedProperties.push(id);
      event.srcElement.value = "Hide Details"
      event.srcElement.innerHTML= "Hide Details"
    }
    else{
      this.spannedProperties.splice(this.spannedProperties.indexOf(id),1);
      event.srcElement.value = "Show Details"
      event.srcElement.innerHTML = "Show Details"
    }

  }

  arrayContains(id:number):boolean{
    if(this.spannedProperties)
    return this.spannedProperties.indexOf(id) >=0? true: false
    else
      return false
  }
  addOffer(id:number){
    this.sellingOfferId = id
    this.toggleModal()
  }
  toggleModal(){
    this.addOfferActivated = !this.addOfferActivated
  }
}
