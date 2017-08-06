/**
 * Created by shidokht on 2017-07-24.
 */
export interface IEstate {
  sellingOfferId: number;
  estateType: string; //estateType.type
  sellingOfferType: string; //sellingOfferType.type
  price: number;
  pieceNumbers: number;
  hasFeature: boolean;
  hasUnit: boolean;
  hasImage: boolean;
  imageData?: string;
  age: number;
  isSold: boolean;
  detail?: IEstateDetail
}
export interface IEstateDetail{

  age: number
  basePrice:number;

  facilities?: {}
  features?:{}
  number?:string

  country?:string;
  state?:string;
  cityId?: string;
  district?:string;
  street?:string
  postalcode:string
  renewDate?:string
  units?:{}


}
