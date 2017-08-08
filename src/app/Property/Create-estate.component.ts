/**
 * Created by shidokht on 2017-07-25.
 */
import {Component, OnInit} from "@angular/core";
import {IEstate, IEstateDetail} from "./Estate.model";
import {EstateService} from "./Estate.service";
@Component({
  templateUrl: './Create-estate.component.html'
})
export class CreateEstateComponent implements OnInit{

  estate:IEstate
  estateDetail:IEstateDetail
  countries = []
  states=[]
  cities = []
  districts= []
  sellingOfferTypes = []
  estateTypes =[]
  selectedCountry
  selectedState
  selectedCity
  selectedDistrict
  constructor( private estateService:EstateService){}

  ngOnInit(){

    this.estateService.getCountries().subscribe(
      resp => {this.countries = resp}
    )
    this.estateService.getSellingOfferTypes().subscribe(
      resp => { this.sellingOfferTypes = resp}
    )
    this.estateService. getEstateTypes().subscribe(
      resp => { this.estateTypes = resp}
    )
    // this.estate.detail= this.estateDetail
  }
  populateStates(){
    this.estateService.getStates(this.selectedCountry.id).subscribe(
      resp=> {this.states =resp }
    )
  }
  populateCities(){
    this.estateService.getCities(this.selectedState.id).subscribe(
      resp=> {this.cities =resp }
    )
  }
  populateDistricts(){
    this.estateService.getDistricts(this.selectedCity.id).subscribe(
      resp=> {this.districts =resp }
    )
  }
  createEstate(formValue){
    formValue.country = this.selectedCountry.id;
    formValue.state = this.selectedState.id;
    formValue.city = this.selectedCity.id;
    formValue.sellingOfferType = formValue.sellingOfferType.type;
    formValue.estateType = formValue.estateType.type;
    if(this.selectedDistrict)
    formValue.district = this.selectedDistrict.id;
    //console.log(formValue)
    this.estateService.addEstate(formValue);
  }

}
